import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function RegisterForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleUsernameInput = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }

    const handleRegisterButton = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_HOME_DOMAIN}/auth/sign-up`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })

            const data = await response.json()
            console.log(data)
            localStorage.setItem('userToken', `${data.token}`)
                localStorage.setItem('userId', `${data.userId}`)
                navigate('/')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="mt-30 flex w-80 flex-col items-center self-center rounded-2xl bg-neutral-700 p-8">
            <h1 className="text-2xl font-extrabold">Register an account</h1>
            <form className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                    <label htmlFor="username" className="font-light">
                        Username
                    </label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        autoComplete="username"
                        onChange={handleUsernameInput}
                        className="w-full bg-neutral-800"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="password" className="font-light">
                        Password
                    </label>

                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePasswordInput}
                        className="w-full bg-neutral-800"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleRegisterButton}
                    className="w-full bg-blue-800 p-1.5"
                >
                    Register
                </button>
                <p>
                    Already have an account?{' '}
                    <Link to="/login" className="text-blue-500">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterForm
