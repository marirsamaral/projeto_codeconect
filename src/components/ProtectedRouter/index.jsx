import {useEffect} from 'react'
import {useAuth} from '../../hooks/useAuth'
import {Spinner} from '../Spinner'
import {useNavigate} from 'react-router-dom'

export const ProtectedRouter = ({children}) => {

    const {isAuthenticated, idLoading} = useAuth()

    const navigate = useNavigate();

    useEffect(() => {
        if ( !idLoading && !isAuthenticated ) {
            navigate('/auth/login')
        }
    }, [isAuthenticated, idLoading, navigate])

    if (idLoading) {
        return <Spinner/>
    }

    if (!isAuthenticated) {
        return null
    }
    return children
}