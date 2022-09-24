import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { S_SearchInfor } from "./S_Search";
import { Col, Row } from "antd";
import { DownCircleTwoTone } from "@ant-design/icons";
import styled from "styled-components";
const SearchInfor = () => {
  const { Option, OptGroup } = Select;
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  value && console.log(value, "day là value na");
  return (
    <S_SearchInfor>
      <span className="searchTitle">OUR PROPOSALS</span>
      <span className="searchTitle">
        OUR <span className="textSpecical">DESTINATIONS</span>
      </span>
      <div className="wrapSelect">
        <Row gutter={[20, 26]}>
          <Col xl={8} xs={24}>
            <div className="selectItem">
              <span className="nameKind">Destination</span>
              <Select
                onChange={handleChange}
                dropdownStyle={{ borderRadius: `15px`, background: "#f9f9f9" }}
                suffixIcon={<DownCircleTwoTone style={{ display: `none` }} />}
                defaultValue="All Destination"
                style={{
                  width: "100%",
                  height: `38px`,
                }}
              >
                <Option value="All Destination">All Destination</Option>

                <OptGroup label="Europe">
                  <Option value="Italy">- Italy</Option>
                  <Option value="Netheriands">- Netheriands</Option>
                </OptGroup>
                <OptGroup label="Asia">
                  <Option value="Thailandia">- Thailandia</Option>
                  <Option value="Netheriands">- Netheriands</Option>
                </OptGroup>
                <Option value="Oceania">Oceania</Option>
                

              </Select>
            </div>
          </Col>
          <Col xl={8} xs={24}>
            <div className="selectItem">
              <span className="nameKind">Difficulty</span>
              <Select
                dropdownStyle={{ borderRadius: `15px`, background: "#f9f9f9" }}
                suffixIcon={<DownCircleTwoTone style={{ display: `none` }} />}
                defaultValue="All Difficulty"
                style={{
                  width: "100%",
                  height: `38px`,
                }}
              >
                <Option value="All Difficulty">All Difficulty</Option>
                <Option value="Hight">Hight</Option>
                <Option value="Low">Low</Option>
                <Option value="Medium">Medium</Option>
              </Select>
            </div>
          </Col>
          <Col xl={8} xs={24}>
            <div className="selectItem">
              <span className="nameKind">Typology</span>
              <Select
                dropdownStyle={{ borderRadius: `15px`, background: "#f9f9f9" }}
                suffixIcon={<DownCircleTwoTone style={{ display: `none` }} />}
                defaultValue="All Typology"
                style={{
                  width: "100%",
                  height: `38px`,
                }}
              >
                <Option value="All Typology">All Typology</Option>
                <Option value="Relax">Relax</Option>
                <Option value="Cultural">Cultural</Option>
                <Option value="Sport">Sport</Option>
                <Option value="History">History</Option>
              </Select>
            </div>
          </Col>
          <Col xl={8} xs={24}>
            <div className="selectItem">
              <span className="nameKind">Min Age</span>
              <Select
                dropdownStyle={{ borderRadius: `15px`, background: "#f9f9f9" }}
                suffixIcon={<DownCircleTwoTone style={{ display: `none` }} />}
                defaultValue="All Min Age"
                style={{
                  width: "100%",
                  height: `38px`,
                }}
              >
                <Option value="All Min Age">All Min Age</Option>
                <Option value="10 years">10 years</Option>
                <Option value="18 years">18 years</Option>
                <Option value="30 years">30 years</Option>
              </Select>
            </div>
          </Col>
          <Col xl={8} xs={24}>
            <div className="selectItem">
              <span className="nameKind">Durations</span>
              <Select
                dropdownStyle={{ borderRadius: `15px`, background: "#f9f9f9" }}
                suffixIcon={<DownCircleTwoTone style={{ display: `none` }} />}
                defaultValue="All Durations"
                style={{
                  width: "100%",
                  height: `38px`,
                }}
              >
                <Option value="All Durations">All Durations</Option>
                <Option value="1 - 3 Days">1 - 3 Days</Option>
                <Option value="3 - 6 Day">3 - 6 Days</Option>
                <Option value="6 - 9 Days">6 - 9 Days</Option>
              </Select>
            </div>
          </Col>
          <Col xl={8} xs={24}>
            <button className="btnSearch">SEARCH</button>
          </Col>
        </Row>
      </div>
    </S_SearchInfor>
  );
};

export default SearchInfor;
