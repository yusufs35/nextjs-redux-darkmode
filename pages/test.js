import ThemeProvider from '@/providers/theme-provider';
import { setDarkMode } from '@/store/slices/theme-slice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Test = ({todos}) => {
   const {darkMode} = useSelector(state=>state.theme);
   const dispatch = useDispatch();
   console.log("ok");

  return (
    <ThemeProvider>
        <h1>Alooo</h1>
        <h3>Darkmode: {darkMode.toString()}</h3>
        <input type="checkbox" checked={darkMode} onChange={()=> dispatch(setDarkMode(!darkMode))}/>

        <ul>
          {todos.map(item=> <li key={item.id}>{item.title}</li>)}
        </ul>
    </ThemeProvider>
  )
}

export default Test

export async function getServerSideProps() {
    const todos = await fetch(
      "https://jsonplaceholder.typicode.com/todos"
    ).then((response) => response.json());
  
    return {
      props: { todos }
    };
  }