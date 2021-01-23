import React, { useEffect, useRef, useState } from 'react'
import { loadTodos, addTodo, updateTodo, removeTodo } from './db'

const ToDo = () => {
  let [todos, setTodos] = useState(undefined)
  let [version, setVersion] = useState(0)
  let [title, setTitle] = useState('')
  let input = useRef()
  useEffect(() => {
    loadTodos().then(todos => setTodos(todos))
  }, [version])
  if (todos === undefined) return <div>loading...</div>
  return <div>
    {todos.length
      ? <ul>{todos.map(({ id, title, done }) => <li key={id}>
        <input type="checkbox" checked={done} onChange={e => {
          updateTodo(id, { done: !done }).then(setVersion(x => x + 1))
        }} />
        {title}
        <button onClick={e => {
          removeTodo(id).then(setVersion(x => x + 1))
        }}>删除</button>
      </li>)}</ul>
      : <p>尚无记录</p>}
    <input ref={input} value={title} onChange={e => setTitle(e.target.value)} />
    <button onClick={() => {
      if (!title) {
        let el = input.current
        el.style.transition = 'none'
        el.style.backgroundColor = 'red'
        setTimeout(() => {
          el.style.transition = 'background-color 2s'
          el.style.backgroundColor = 'transparent'
        })
        return
      }
      addTodo({ title, done: false }).then(() => {
        setVersion(x => x + 1)
        setTitle('')
      })
    }}>添加</button>
  </div>
}

export default ToDo