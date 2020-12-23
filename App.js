import logo from './logo.svg';
import './App.css';
import img1 from './image/1.jpg'
import img2 from './image/2.jpg'
import img3 from './image/3.jpg'
import img4 from './image/4.jpg'
import img5 from './image/5.jpg'
import img6 from './image/6.jpg'
import img7 from './image/7.jpg'
import img8 from './image/8.jpg'
import img9 from './image/9.jpg'

function App() {
  let students = [
      { name: 'Binh', gender: 'Male', age: 28 },
      { name: 'anh', gender: 'Male', age: 31 },
      { name: 'thinh', gender: 'Male', age: 34 },
      { name: 'Huy', gender: 'Male', age: 24 }
  ]
  function Bai1(){
    var totalAge = 0;
    students.forEach(function(student){
        totalAge += student.age;
    });
    var averageAge = totalAge / students.length;
    return averageAge;
  }
  function Bai2(){
    students.sort(function(a,b){
      return b.age - a.age;
    })
    return students;
  }
  function Bai3(){
    students.sort(function(a,b){
      return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
    })
    return students;
  }
  function Bai4(){
    students = students.filter(function(student){
      return student.name.toLowerCase().startsWith('h');
    })
    return students;
  }
  return (
    <div className="App">
      <div>Bài 1: Trung bình số tuổi là: <br/>{Bai1()}</div><br />
      <div>Bài 2: Học viên số tuổi từ cao đến thấp: <br /> {JSON.stringify(Bai2())}</div><br />
      <div>Bài 3: Học viên sắp xếp theo tên: <br />{JSON.stringify(Bai3())}</div><br />
      <div>Bài 4: Học viên tên bắt đầu chữ H: <br />{JSON.stringify(Bai4())}</div><br />
      <table className="table" width="100%">
        <tr>
          <td><img src={img1}/></td>
          <td><img src={img2}/></td>
          <td><img src={img3}/></td>
        </tr>
        <tr>
          <td><img src={img4}/></td>
          <td><img src={img5}/></td>
          <td><img src={img6}/></td>
        </tr>
        <tr>
          <td><img src={img7}/></td>
          <td><img src={img8}/></td>
          <td><img src={img9}/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
