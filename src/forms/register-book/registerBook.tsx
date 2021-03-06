import FormData from 'form-data'
import React, { useState } from 'react'
import { Card } from '../../components/card/card'
import { usePostRequest } from '../../hooks/usePostRequest'
import './registerBook.css'


export const RegisterBookForm = () => {
	const [title, setTile] = useState('')
	const [description, setDescription] = useState('')
	const [page, setPage] = useState(0)
	const [image, setImage] = useState<File>({} as File)
	const [url, setUrl] = useState('')

	const { mutate: onSubmitBook } = usePostRequest('/book/create-book', {
		onSuccess: (res) => {
			console.log({ res })
		},
		onError: console.log
	})

	const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setTile(value)
	}

	const onChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setDescription(value)
	}

	const onChangePage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target
		setPage(Number(value))
	}

	const onChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		if (files) {
			const file = files[0]
			setImage(file)
			setUrl(URL.createObjectURL(file))
		}
	}

	const onSubmit = async () => {
		const data = new FormData()

		data.append('image', image, image.name)
		data.append('title', title)
		data.append('description', description)
		data.append('page', page)

		const config = {
			headers: { 'content-type': 'multipart/form-data' }
		}

		onSubmitBook({ data, config })
	}

	return (
		<div className="RegisterBookForm">
			<Card>
				<form onSubmit={onSubmit}>
					<div className='InputRegisterBookContainer'>

						<div className="InputField">
							<label>
								Title:
							<input
									name="title"
									className="BookInput"
									placeholder="title"
									onChange={onChangeTitle}
								/>
							</label>
						</div>

						<div className="InputField">
							<label>
								Description:
							<input
									name="description"
									className="BookInput"
									placeholder="description"
									onChange={onChangeDescription}
								/>
							</label>
						</div>

						<div className="InputField">
							<label>
								Page:
							<input
									name="Page"
									className="BookInput"
									type="number"
									placeholder="Page"
									onChange={onChangePage}
								/>
							</label>
						</div>

						<div className="InputField">
							<input
								type='file'
								accept="image/png, image/jpeg"
								onChange={onChangeImage}
							/>
							{!!image && <img width={100} height={100} alt={image.name} src={url} />}
						</div>

					</div>

					<div className="ButtonContainer">
						<button
							type="button"
							name="login"
							value="login"
							onClick={onSubmit}
						>Salvar</button>
					</div>

				</form>
			</Card>
		</div>
	)
}