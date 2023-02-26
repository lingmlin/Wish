import React, { useContext, useState } from "react";
import { PrinterData } from "../../xpyun/index";
import { PageRouterContext } from "../../App";
import config from "../../config/config";
import "./CustomerInput.css";
import ChatGPT from "../ChatGPT";
import ChatGPTSelect from "../ChatGPT/components/ChatGPTSelect"
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';

export default function CustermoInput() {
  const [name, setName] = useState("");
  const [staff, setStaff] = useState("");
  const [text, setText] = useState("");
  const [printResult, setPrintResult] = useState(false);
  const [process, setProcess] = useState(false);
  const changeRoute = useContext(PageRouterContext);
  // jay for ui display
  const [displayMask, setDisplayMask] = useState(false);
  const [displayPrintFirst, setDisplayPrintFirst] = useState(false);
  const [displayPrintSecond, setDisplayPrintSecond] = useState(false);
  const [displayPrintThird, setDisplayPrintThird] = useState(false);

  //Add for chatGPT
  const [displayPrintForth, setDisplayPrintForth] = useState(false);
  const [ChatGPTdata, setChatGPTData] = useState(() => ChatGPTSelect());

  //字数统计
  const MAX_LENGTH = 64;
  function inputWish(event) {
    const newText = event.target.value;
    if (newText.length <= MAX_LENGTH) {
      setText(newText);
    }
  }

  //ChatGPT
  // function ChatGPTSelect() {

  //   // 10 个已知数据
  //   // const data = [
  //   //   'May your life be filled with love, joy, and adventure!',
  //   //   'Wishing you a lifetime of love, joy, and happiness!',
  //   //   'May your future be bright and your dreams come true!',
  //   //   'Wishing you a journey filled with love, happiness, and success!',
  //   //   'May your heart be filled with love and your soul with peace!',
  //   //   'Wishing you a life of abundance, joy, and prosperity!',
  //   //   'May every day be filled with happiness, love, and laughter!',
  //   //   'Wishing you a life filled with love, joy, and adventure!',
  //   //   'May your dreams take you to places you\'ve never been before!',
  //   //   'Wishing you all the love, joy, and happiness in the world!',
  //   //   'May your journey be filled with success, happiness, and love!',
  //   //   'May your life be filled with endless opportunities and possibilities!',
  //   //   'Wishing you a bright and successful future!',
  //   //   'May your heart be filled with love, your mind with wisdom, and your life with happiness!',
  //   //   'Wishing you a life of love, laughter, and adventure!',
  //   //   'May your journey be filled with love, hope, and inspiration!',
  //   //   'Wishing you all the best on your journey towards success!',
  //   //   'May your life be filled with love, joy, and abundance!',
  //   //   'Wishing you a life of happiness, success, and fulfillment!',
  //   //   'May your heart be filled with love, and your soul with peace!',
  //   //   'Wishing you a life filled with love, happiness, and fulfillment!',
  //   //   'May your dreams take flight and your heart soar with happiness!',
  //   //   'Wishing you a life of endless possibilities and boundless opportunities!',
  //   //   'May your journey be filled with love, laughter, and joy!',
  //   //   'Wishing you a life filled with adventure, excitement, and happiness!',
  //   //   'May your heart always be open to new experiences and possibilities!',
  //   //   'Wishing you a life of love, peace, and prosperity!',
  //   //   'May your journey be filled with love, light, and happiness!',
  //   //   'Wishing you all the best on your journey towards your dreams and goals!',
  //   //   '祝福你生日快乐，岁岁平安，年年幸福！',
  //   //   '愿你的生活充满快乐、成功和美好！',
  //   //   '祝福你的人生充满爱、和平和幸福！',
  //   //   '愿你的梦想变成现实，生活充满希望和灵感！',
  //   //   '祝福你前途光明，梦想成真！',
  //   //   '愿你的生命充满美好、幸福和自由！',
  //   //   '祝福你的心灵充满喜悦、和平和安宁！',
  //   //   '愿你的前途洋溢着成功、爱和快乐！',
  //   //   '祝福你的人生充满勇气、智慧和力量！',
  //   //   '愿你的心灵充满温暖、善良和关爱！',
  //   //   '祝福你的梦想成真，人生充满精彩和无限可能！',
  //   //   '愿你的生活充满光彩、热情和创意！',
  //   //   '祝你平安顺遂，一帆风顺！',
  //   //   '愿你的梦想变成现实，生活充满希望和灵感！',
  //   //   '祝福你的每一天都充满阳光和温暖！',
  //   //   '愿你的人生充满欢乐、成功和幸福！',
  //   //   '祝福你永远拥有勇气、智慧和坚韧不拔的精神！',
  //   //   '愿你的前途充满着机遇、创新和无限可能！',
  //   //   '祝你心想事成，万事如意！',
  //   //   '愿你的心灵充满喜悦、和平和安宁！',
  //   //   '祝你一帆风顺，前途光明！',
  //   //   '愿你的人生充满爱、和平和幸福！',
  //   //   '祝福你健康长寿，家庭幸福美满！',
  //   //   '愿你的生命充满美好、幸福和自由！',
  //   //   '祝你有一份喜欢的工作，爱一个人，住一个家！',
  //   //   '愿你的前途洋溢着成功、爱和快乐！',
  //   //   '祝福你一切顺利，万事如意！',
  //   //   '愿你的梦想成真，生活充满光彩和希望！',
  //   //   '祝你的人生充满勇气、智慧和力量！',
  //   //   '愿你的前途充满创意、机遇和无限可能！',
  //   //   '祝你天天开心，事事顺心！',
  //   //   '愿你的心灵充满温暖、善良和关爱！',
  //   //   '祝福你平安快乐，健康长寿！',
  //   //   '愿你的梦想变成现实，生活充满希望和灵感！',
  //   //   '祝你心想事成，万事如意，前途光明！',
  //   //   '愿你的人生充满快乐、成功和美好！',
  //   //   '祝福你永远保持乐观、积极和坚强的心态！',
  //   //   '愿你的前途洋溢着成功、爱和快乐！',
  //   //   '祝你事业有成，家庭幸福！',
  //   //   '愿你的生活充满爱、和平和幸福！',
  //   //   '祝福你生活充满光彩和创意！'];

  //   const data = ["abc", "gre", "rgegr", "dgfag", "dfgdfg", "fdga", "dagfg", "EFW", "SFEW", "EFWFEWE", "FEW", "FEWF", "EFW", "EFWF", "FEWEW"]

  //   // 随机选择一个数据
  //   const randomIndex = Math.floor(Math.random() * data.length);
  //   const selectedData = data[randomIndex];

  //   setChatGPTData(selectedData);

  //   return <div> {selectedData}</div>;

  // }

  function ChatGPTDiv(props) {
    return <div>{props.data}</div>;
  }



  //
  const printWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(true);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    //打印逻辑
    setDisplayPrintForth(false);
  };

  const printingWish = async () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(true);
    setDisplayPrintThird(false);
    // 打印中，跳转暂时设置5秒
    setDisplayPrintForth(false);
    await submit();
  };

  const finishPrintingWish = () => {
    setDisplayMask(true);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(true);
    setDisplayPrintForth(false);
  };

  const closePrinting = () => {
    setDisplayMask(false);
    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    setDisplayPrintForth(false);
    //打印逻辑
  };

  const ChatGPTPrint = () => {
    setDisplayMask(true);

    setDisplayPrintFirst(false);
    setDisplayPrintSecond(false);
    setDisplayPrintThird(false);
    setDisplayPrintForth(true);
    ChatGPTSelect();
    //setChatGPTData(ChatGPTdata);
    //打印逻辑
  };

  //jay
  const submit = async () => {

    setProcess(true);
    console.log(ChatGPTdata);
    let result = await PrinterData({
      name: "userinfoStore.name",
      //text: text,
      text: { ChatGPTdata: null ? text : ChatGPTdata },
    });

    console.log(ChatGPTdata);
    console.log(text);
    if (result) {
      finishPrintingWish();
    } else {
      navigateTo(changeRoute, config.pages.failed);
    }
  };

  const navigateTo = (changeRoute, id) => {
    changeRoute({ id: id });
  };
  const inputData = () => {
    return (
      <div>
        <input
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></input>{" "}
        祝福
        <br></br>
        <br></br>
        <br></br>
        <button onClick={submit}>开始打印</button>
      </div>
    );
  };
  const home = () => {
    navigateTo(changeRoute, config.pages.welcome);
  };

  return (
    <div className="inputBackground">
      <div className="inputWishTitle">请输入你的愿望</div>
      {/* <textarea className="inputWishDiv"></textarea> */}
      {/* 字数统计 */}
      <div>
        <textarea className="inputWishDiv" type="text" value={text} onChange={inputWish}></textarea>
        <p className="wordinglimit">{text.length}/{MAX_LENGTH}</p>
      </div>
      <div className="flower"></div>

      {/* ChatGPT */}
      <ChatGPT className="ChatGPTbtn" label="没有头绪？问问ChatGPT吧" onClick={ChatGPTPrint} />

      {/* <button className="printWish" onClick={printWish}>
        打印愿望
      </button> */}
      {/* 按键特效 */}
      <Button variant="contained" color="green" className="printWish" onClick={printWish}>
        <span className="btnPrintWording">打印愿望</span>
      </Button>

      <div className="back" onClick={home}>
        返回
      </div>

      {/* masking */}
      <div
        class="mask"
        style={{ display: displayMask ? "block" : "none" }}
      ></div>

      {/* 弹窗1 */}
      <div
        class="pop1"
        style={{ display: displayPrintFirst ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">打印后请及时取走以免丢失</div>
        <button class="i_know" onClick={printingWish}>
          知道了,开始打印
        </button>
        <div class="later" onClick={closePrinting}>
          稍后再打印
        </div>
      </div>

      {/* 弹窗2 */}
      <div
        class="pop2"
        style={{ display: displayPrintSecond ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="loading"></div>
        <div class="printing"></div>
      </div>

      {/* 弹窗3 */}
      <div
        class="pop3"
        style={{ display: displayPrintThird ? "block" : "none" }}
      >
        <div class="title"></div>
        <div class="content">你已成功许下心愿请及时取走</div>

        <button class="backToWelcome" onClick={home}>
          返回主页面
        </button>
      </div>

      {/* 弹窗4 - ChatGPT */}
      <div
        class="pop4"
        style={{ display: displayPrintForth ? "block" : "none" }}>

        {/* <div class="title"></div> */}
        <div class="ChatGPTArea"><ChatGPTSelect class="ChatGPTText" /></div>
        <button class="useitBtn" onClick={printingWish}>
          <div class="useItWording">使用心愿</div>
        </button>
        <button class="anotherBtn" onClick={ChatGPTPrint}>
          <div class="anotherWording">换一个</div>
        </button>
      </div >

    </div >
  );
}
