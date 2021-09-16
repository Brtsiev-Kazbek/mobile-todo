import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import plusSvg from '../assets/svg/Plus.svg';
import Modal from './Modal';

const TodoList = () => {
  const tasks = useSelector(state => state.tasks);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  return (
    <TodoListContainer>
      { tasks.length === 0 ? <span>Список задач пуст</span> : null}
      { tasks.map((el, index) => (
        <TodoListItem key={index}>
          <input type="checkbox" checked={el.completed} readOnly={true} />
          <span className="todo-list-item__text">{el.title}</span>
        </TodoListItem>
      )) }
      <AddButton onClick={() => setIsModalVisible(true)}><img src={plusSvg} alt="Add"/></AddButton>
      { isModalVisible && <Modal>
        <ModalContent onClick={() => setIsModalVisible(false)} />
      </Modal> }
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  box-sizing: border-box;
`;

const TodoListItem = styled.div`
  width: 100%;
  height: 35px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    visibility: hidden;
    position: relative;
    width: 23px;
    height: 23px;

    &::before {
      position: absolute;
      top: 0;
      content: '';
      width: 25px;
      height: 25px;
      background: #a2a2a2;
      border-radius: 50%;
      visibility: visible;
    }

    &:checked::before {
      position: absolute;
      top: 0;
      content: '';
      width: 25px;
      height: 25px;
      background: #23a3ff;
      border-radius: 50%;
      visibility: visible;
    }
}

  .todo-list-item__text {
    margin-left: 15px;
  }
`;

const AddButton = styled.button`
  position: absolute;
  width: 60px;
  height: 60px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  border: none;
  background: #ffffff;
  z-index: 10;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 85%;
  border-radius: 40px 40px 0 0;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 15%;
  background: #ffffff;
  z-index: 20;
`;

export default TodoList;