import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hooks'
import { AuthContext } from '../../context/AuthContext'
import { Loader } from '../navbar/Loader'
import { LinksList } from './LinkList/LinksList'

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const { loading, request } = useHttp()
    const { token } = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(fetched)
        } catch (e) { }
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }

    async function deleteLink(id) {
        const filteredLinks = links.filter(link => link._id !== id)
        setLinks(filteredLinks)
        const response = await fetch(`/api/link/delete/link/${id}`, {
            method: "DELETE"
        });
    }

    return (
        <>
            {
                !loading
                &&
                <LinksList
                    deleteLink={deleteLink}
                    links={links}
                />
            }
        </>
    )
}