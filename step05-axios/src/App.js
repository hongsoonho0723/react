// import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  //전체조회
  const selectAll = ()=>{
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((result)=>{
        console.log(result);
        result.data.map((user)=> console.log(user.id +" | " + user.name ));

    })
    .catch((error)=>{
       console.log(error);
    });
  }

   const selectById = ()=>{
     axios({
       url:"https://jsonplaceholder.typicode.com/users/2" ,
       method:"get" ,
       //data : ,
     })
     .then((result)=>{
       console.log(result.data)
     })
     .then(()=>{
        console.log("성공이후 해야할 작업입니다.~~")
     })
     .catch((err)=>{
        console.log(err);
     });
   }
   /////Spring Boot//////////////////////////////////////
   const insertUser =()=>{
    axios({
      //url:"http://localhost:9000/a" ,
      url:"http://localhost:9000/user" ,
      method:"post" ,
      data :{name:"jang" , email :"8253jang@daum.net", age:20} ,
    })
    .then((result)=>{
      console.log(result.data)
       //화면 출력...

    })
    .catch((err)=>{
       console.log(err);
    });
      
      

   }
   const deleteUser =()=>{
    axios({
      url:"http://localhost:9000/user/5" ,
      method:"delete" ,
    })
    .then((result)=>{
      console.log(result)
       //화면 출력...

    })
    .catch((err)=>{
       alert(err.response.data.title + " | "+err.response.data.detail);
    });
      
   }
   const putUser =()=>{
    axios({
      url:"http://localhost:9000/user/2" ,
      method:"put" ,
      data :{name:"hong" , email :"8253jang@daum.net", age:10} ,
    })
    .then((result)=>{
      console.log(result)
       //화면 출력...

    })
    .catch((err)=>{
       console.log(err);
    });
   }

   //조회
   const getById =()=>{
    axios({
      //url:"http://localhost:9000/a" ,
      url:"http://localhost:9000/user/1" ,
      method:"get" ,
     // data :{name:"jang" , email :"8253jang@daum.net", age:20} ,
    })
    .then((result)=>{
      console.log(result)
       //화면 출력...

    })
    .catch((err)=>{
       console.log(err);
      console.log("detail = ", err.response.data.detail);
      console.log("title = ", err.response.data.title);
      console.log("timestamp = ", err.response.data.timestamp);
      console.log("status = ", err.response.data.status);


    });
   }

   const getUsers =()=>{
    axios({
      //url:"http://localhost:9000/a" ,
      url:"http://localhost:9000/users/" ,
      method:"get" ,
     // data :{name:"jang" , email :"8253jang@daum.net", age:20} ,
    })
    .then((result)=>{
      console.log(result)
       //화면 출력...

    })
    .catch((err)=>{
       console.log(err);
    });
   }

  return (
     <>
      <h3>React Axios </h3>
      <button onClick={selectAll}>get-selectAll</button>
      <button onClick={selectById}>get-selectById</button>
      <hr/>
      <h3>Spring Boot 연동하기(CRUD) </h3>
      <button onClick={insertUser}>Post - user등록 </button>
      <button onClick={deleteUser}>Delete - user삭제 </button>
      <button onClick={putUser}>Put - user수정 </button>
      <button onClick={getById}>Get - 부분조회 </button>
      <button onClick={getUsers}>Get - 전체검색 </button>

     </>
  );
}

export default App;
