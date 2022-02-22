import React, { useState } from "react";
import { SearchContainer } from "./style";
import search from "../../assets/image/search.svg";
import myImage from "../../assets/image/user.jpg";
import bell from "../../assets/image/bell.svg";
import settings from "../../assets/image/settings.svg";
import { Topbar, TopbarIconContainer, TopbarWrapper, TopIconBadge } from "../Dashboard/style";


function Search() {
  return (
    <>
      <SearchContainer>
        <div className="search">
          <div className="input">
            <input
              type="search"
              name="Search Product"
              placeholder="Search Product"
            />
            <img src={search} />
          </div>
          <div className="search-right">
            <Topbar>
              <TopbarWrapper>
                <TopbarIconContainer>
                  <img src={bell} alt="" />
                  <TopIconBadge>2</TopIconBadge>
                </TopbarIconContainer>
                <TopbarIconContainer>
                  <img src={settings} alt="" />
                  <TopIconBadge>2</TopIconBadge>
                </TopbarIconContainer>
              </TopbarWrapper>
            </Topbar>
            <div className="my">
              <img src={myImage} className="myImg" />
              <p>Toshev Samandar</p>
            </div>
          </div>
        </div>
      </SearchContainer>
    </>
  );
}

export default Search;
