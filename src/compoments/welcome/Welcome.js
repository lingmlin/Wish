import React, { useContext, useState } from "react";
import { addPrinter, PrinterData } from "../..//xpyun/index";
import { useEffect } from "react";
import config from "../../config/config";
import { getAccess_token } from "../../fetch/wxInfo";
import { PageRouterContext } from "../../App";
import { getQueryString } from "../../xpyun/util/util";
import "./CustomerWelcome.css";
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default function Welcome() {
  const changeRoute = useContext(PageRouterContext);

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const checkPlay = async () => {
    let useinfo = await getAccess_token(getQueryString("code"));
    navigateTo(changeRoute, config.pages.input);
  };

  return (
    <div>
      <div className="welcomeBackground">
        {/* <button className="wishButton" onClick={checkPlay}>
          我要许愿
        </button> */}
        {/* 按钮特效 */}
        <Button variant="contained" color="green" className="wishButton" onClick={checkPlay}>

          <span className="iWish">我要许愿</span>

        </Button>
      </div>
    </div>
  );
}
