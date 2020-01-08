import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


class App extends React.Component
{
  state = {
    developers: []
  }

   componentDidMount()
   {
     axios.get("https://api.github.com/users")
       .then((response) => {
         const {data} = response;
         this.setState({developers: data});
       })
     this.setState({loaded: "Yes"});
   }
   createList(developer: any): React.ReactNode
   {
     return <React.Fragment key={developer.login}>
       <td>{developer.login}</td>
       <td>{developer.id}</td>
       <td><img src={developer.avatar_url} /></td>
       <td> </td>
     </React.Fragment>
   }
   render(): React.ReactNode
   {
     const {developers} = this.state;
     console.log(this.state);
     return (
       <React.Fragment>
    <header>
      <h1>Hello world</h1>
    </header>
    <div className='container'>
      <table>
         <tbody>
         {developers.slice(0, 10).map((developer: any | object) => {
           return <tr key={developer.login}>
             {this.createList(developer)}
           </tr>
         })}
         </tbody>
      </table>
    </div>
    </React.Fragment>
  );
   }
}

export default App;
