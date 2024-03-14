/* BoardList.js */
import React, {useEffect, useState} from 'react';
import axios from "axios";
import Table from 'react-bootstrap/Table';

const BoardList = () => {
    const [ boardList, setBoardList] = useState([]);
    const [total, setTotal] = useState(0);

    const getBoardList = async () => {
        const resp = await axios.get('//localhost:8080/board');

        const total = Object.keys(resp.data.data).length;

        setBoardList(resp.data.data);
        setTotal(total);

        console.log(resp.data.data);
        console.log(total);
    }

    useEffect(() => {
      getBoardList();
    }, []);
    
  return (


<div>
  <div>
    총 게시물 : {total}건
  </div>
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>글번호</th>
        <th>제목</th>
        <th>글내용</th>
        <th>작성자</th>
        <th>등록일</th>
        <th>수정일</th>
      </tr>
    </thead>
    <tbody>
      {boardList.map((board) => (
        <tr key={board.boardId}>
          <td>{board.boardId}</td>
          <td>{board.title}</td>
          <td>{board.content}</td>
          <td>{board.writer}</td>
          <td>{board.regDate}</td>
          <td>{board.updDate}</td>
        </tr>
      ))}
    </tbody>
  </Table>
</div>


   
  );
 
};

export default BoardList;