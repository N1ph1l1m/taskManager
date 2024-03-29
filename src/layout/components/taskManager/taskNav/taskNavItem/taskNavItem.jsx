import React from "react";
import Button from "../../../../../components/button/button";
import Icon from "../../../../../components/icon/icon";
import "../navigator.css";
import "../../../../../index.css";
import DropDown from "./dromDown";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

import { RiTaskLine } from "react-icons/ri";
import { BsCalendar2Day } from "react-icons/bs";
import { FaCalendarDay, FaTrash } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const TaskItemWrap = styled.div`
  height: 980px;
  position: relative;
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding-top: 15px;
`;
const TaskNav = styled.div`
  height: 120px;
  width: 220px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;
const BorderBotton = styled.div`
  margin: 5px auto;
  width: 190px;
  border: 1px solid #d1cfcf;
`;
const TaskList = styled.div`
  width: 220px;
  min-height: 70px;
`;
const DropDownContent = styled.div`
  width: 192px;
  min-height: 30px;
  margin-left: 4px;
  border: 1px solid green;
  margin-bottom: 5px;
`;
const OutletWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
const OutletItem = styled.div`
  width: 95%;
  height: 100vh;
  padding: 15px 20px;
  `

function TaskNavItem() {
  return (
    <MainWrap>
      <TaskItemWrap>
        <TaskNav>
          <Button className="taskNav">
            <Link className="textLink" to={"today"}>
              <Icon>
                <FaCalendarDay size="20" />
              </Icon>
              <span>Today</span>
            </Link>
          </Button>

          <Button className="taskNav">
            <Link className="textLink" to={"nextseven"}>
              <Icon>
                <BsCalendar2Day size="20" />
              </Icon>
              <span>Next 7 Days</span>
            </Link>
          </Button>

          <Button className="taskNav">
            <Link className="textLink" to={"inbox"}>
              <Icon>
                <IoIosMail size="20" />
              </Icon>
              <span>Inbox</span>
            </Link>
          </Button>
          <BorderBotton />
        </TaskNav>

        <TaskList>
          <Link className="textLinkDrop" to={"work"}>
            <DropDown
              text="Work"
              components={
                <DropDownContent>
                  <p>Text</p>
                  <p>Text</p>
                </DropDownContent>
              }
            />
          </Link>

          <Link className="textLinkDrop"to={"mytask"}>
            <DropDown text="My tasks" components={<DropDownContent />} />
          </Link>

          <BorderBotton />
        </TaskList>

        <TaskNav>
          <Button className="taskNav">
            <Link className="textLink" to={"completed"}>
              <Icon>
                <RiTaskLine size="20" />
              </Icon>
              <span>Completed</span>
            </Link>
          </Button>

          <Button className="taskNav">
            <Link className="textLink" to={"trash"}>
              <Icon>
                <FaTrash size="20" />
              </Icon>
              <span>Trash</span>
            </Link>
          </Button>
        </TaskNav>
      </TaskItemWrap>
      <OutletWrap>
              <OutletItem>
              <Outlet />
              </OutletItem>
      </OutletWrap>
    </MainWrap>
  );
}

export default TaskNavItem;
