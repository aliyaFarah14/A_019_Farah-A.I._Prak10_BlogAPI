'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import pb from '@/lib/pocketbase'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      await pb.collection('users').authWithPassword(
        email,
        password
      )

      // login berhasil
      router.push('/dashboard')
    } catch (err) {
      setError('Email atau password salah')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold text-center text-pink-600 mb-6">
          Login
        </h1>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  )
}
