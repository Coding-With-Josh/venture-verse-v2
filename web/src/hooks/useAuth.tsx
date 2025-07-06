import { useSession, signIn, signOut } from 'next-auth/react'
import { User } from '@/types/user' 

export function useAuth() {
  const { data: session, status } = useSession()
  const isLoading = status === 'loading'
  const isAuthenticated = !!session
  const user = session?.user as User | undefined
  const isAdmin = user?.role === 'ADMIN'

  return {
    user,
    isAuthenticated,
    isLoading,
    isAdmin,
    signIn,
    signOut,
  }
}
