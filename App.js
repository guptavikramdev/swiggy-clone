import React, { useState, useEffect } from "react";
export default App = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [data, setData] = useState([
    { id: 1, title: "Item1",isActive:false},
    { id: 2, title: "Item2",isActive:false},
    { id: 3, title: "Item3",isActive:false},
    { id: 4, title: "Item4",isActive:false},
    { id: 5, title: "Item5",isActive:false},
  ]);
  const [text, setText] = useState("");
  const handlerChange = (e) => {
    setText(e.currentTarget.textContent);
  };
  const handleClick = (e) => {
    setIsEditable(true);
     let id=e.target.value;
    const updateData=data.map((item)=> item.id !==id ? {...item, ...{isActive:true}}: {...item, ...{isActive:false}})
    console.log(updateData)
    setData(updateData)
  };
  const handleBlur = (e) => {
    setIsEditable(false);
    setIsActive(false)
    let id=e.target.value;
     //updateDataByFindIndex(id)
     updateDataByMap(id)

      
  };
  // Update with map function 
  const updateDataByMap=(id)=>{
      const updateData=data.map((item)=> item.id ===id ? {...item, ...{title:text,isActive:false}}: item)
      setData(updateData)
      return true;
  }
  //update with findIndex
  const updateDataByFindIndex = (id) => {
    const index = data.findIndex(object => {
          return object.id === id;
      });
       if (index !== -1) {
        data[index].title = text;
       }
      return data;
  }
  console.log(data)
  return (
       

    <ul>
      {data.map((item) => (
        <li
          key={item.id}
          value={item.id}
          contentEditable={isEditable}
          onClick={handleClick}
          onBlur={handleBlur}
          onInput={handlerChange}
          suppressContentEditableWarning={true}
          className={`${!item.isActive ? "active" : "not_active"} `}
        >
          {item.title}
        </li>
      ))}
    </ul>
  
  );
};
