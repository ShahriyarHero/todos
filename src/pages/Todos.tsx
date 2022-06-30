import React from 'react'
import AddForm from '../components/AddForm'
import Layout from '../components/Layout'
import Page from '../components/Page'
import TodoList from '../components/TodoList'

type Props = {}

const Todos = (props: Props) => {
  return (
    <Page>
        <Layout>
            <AddForm />
            <TodoList />
        </Layout>
    </Page>
  )
}

export default Todos