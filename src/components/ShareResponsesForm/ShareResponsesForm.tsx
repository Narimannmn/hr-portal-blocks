'use client'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { API_BASE_URL } from '@/src/api/api'

type ShareResponseData = {
	fio: string
	phone: string
	email: string
	text: string
}

export function ShareResponsesForm() {
	const {
		handleSubmit,
		formState: { errors },
		control,
		reset, // Add the reset method
	} = useForm<ShareResponseData>({
		mode: 'onChange',
		defaultValues: {
			fio: '',
			phone: '',
			email: '',
			text: '',
		},
	})

	const onSubmit: SubmitHandler<ShareResponseData> = async data => {
		try {
			const response = await fetch(`${API_BASE_URL}/api/shareResponses`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (response.ok) {
				toast.success('Отклик успешно отправлен')
				reset() // Reset the form after successful submission
			} else {
				toast.error('Не удалось отправить отклик')
			}
		} catch (error) {
			toast.error('Ошибка при отправке отклика')
			console.error(error)
		}
	}

	return (
		<div className='w-[620px] text-white border-none p-4 mx-auto'>
			<h2 className='text-5xl font-medium mb-8'>Есть чем поделится? пиши!</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='space-y-[2rem]'>
				<div>
					<Controller
						name='fio'
						control={control}
						rules={{ required: 'ФИО обязательно' }}
						render={({ field }) => (
							<Input
								{...field}
								id='fio'
								className='bg-[#21262B6B] p-[1.125rem_0.75rem] rounded-[0.75rem]'
								placeholder='ФИО'
							/>
						)}
					/>
					{errors.fio && (
						<span className='text-red-500 text-sm'>{errors.fio.message}</span>
					)}
				</div>

				<div>
					<Controller
						name='phone'
						control={control}
						rules={{ required: 'Телефон обязателен' }}
						render={({ field }) => (
							<Input
								{...field}
								id='phone'
								type='tel'
								className='bg-[#21262B6B] p-[1.125rem_0.75rem] rounded-[0.75rem]'
								placeholder='Мобильный телефон'
							/>
						)}
					/>
					{errors.phone && (
						<span className='text-red-500 text-sm'>{errors.phone.message}</span>
					)}
				</div>

				<div>
					<Controller
						name='email'
						control={control}
						rules={{ required: 'Email обязателен' }}
						render={({ field }) => (
							<Input
								{...field}
								id='email'
								type='email'
								className='bg-[#21262B6B] p-[1.125rem_0.75rem] rounded-[0.75rem]'
								placeholder='Электронная почта'
							/>
						)}
					/>
					{errors.email && (
						<span className='text-red-500 text-sm'>{errors.email.message}</span>
					)}
				</div>

				<div>
					<Controller
						name='text'
						control={control}
						rules={{ required: 'Сообщение обязательно' }}
						render={({ field }) => (
							<textarea
								{...field}
								id='text'
								className='w-full h-26 p-[1.125rem_0.75rem] bg-[#21262B6B] rounded-[0.75rem]'
								placeholder='Текст сообщения'
							/>
						)}
					/>
					{errors.text && (
						<span className='text-red-500 text-sm'>{errors.text.message}</span>
					)}
				</div>
				<span className='text-sm font-normal text-[#D4D4D4]'>
					Отправляя заявку, я согласен/а на сбор и обработку своих персональных
					данных согласно закону РК №94-V
				</span>
				<div className='flex justify-between'>
					<Button
						type='button'
						className='w-1/2 mr-2 p-[1.125rem_0.75rem] rounded-[0.75rem]'
					>
						Отмена
					</Button>
					<Button
						type='submit'
						variant='outline'
						className='w-1/2 bg-[#DBDDDF] text-[#B8BBBF] p-[1.125rem_0.75rem] rounded-[0.75rem]'
					>
						Отправить
					</Button>
				</div>
			</form>
		</div>
	)
}
