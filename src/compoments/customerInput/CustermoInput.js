import React, { useContext, useState, useEffect } from "react";
import { PrinterData } from "../../xpyun/index";
import { PageRouterContext } from "../../App";
import config from "../../config/config";
import "./CustomerInput.css";
import ChatGPT from "../ChatGPT";
import leaf_left from '../../resource/leaf_left.png';
import leaf_right from '../../resource/leaf_right.png';
import leaf_down from '../../resource/leaf_down.png';
import RandomWishSelector from "../ChatGPT/components/RandomWishSelect"
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
  const [ChatGPTdata, setChatGPTData] = useState();
  const selectedData = '祝福你的人生充满爱、和平和幸福！';


  //字数统计
  // const [inputWishValue, setInputWishValue] = useState('');

  const MAX_LENGTH = 64;
  function inputWish(event) {

    const newText = event.target.value;
    // const textarea = event.target;
    // const maxLines = 7;

    // const lines = newText.split('\n').length;
    // if (lines > maxLines) {
    //   newText = newText.substr(0, newText.lastIndexOf('\n'));
    //   textarea.disabled = true;
    // } else {
    //   textarea.disabled = false;
    //const newText = event.target.value;
    if (newText.length <= MAX_LENGTH) {
      setText(newText);
    }
    //setText(newText);
    // }

    //const newText = event.target.value;
    // if (newText.length <= MAX_LENGTH) {
    //   setText(newText);
    // }
  }

  //ChatGPT
  function ChatGPTSelect() {


    // 10 个已知数据
    const data = [
      'May your life be ishing you all the ng you all the lofilofilleove',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成ishing you all the lo功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满希望和灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、ishing you all the lo爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成ishing you all the lo功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满希望和灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、ishing you all the lo爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成ishing you all the lo功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满希望和灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、ishing you all the lo爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成ishing you all the lo功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满希望和灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、ishing you all the lo爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'Wishing you a lishing you all the ng you all the lofiloifetim, j',
      'May your future ishing you all theng you all the lofi lobed y',
      'Wishing you a ishing you all the lng you all the lofiojours!',
      '愿你的梦想变成现实ishing you all the lo，生活充满希望和灵感！',
      '愿你的生命充满美好、幸ishing you all the lo福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all the lo、爱和快乐！',
      'May your heart ishing you all the ng you all the lofiloace!']
    const data2 = ['新年快乐', '身体健康', '万事如意', '兔年大吉', '开开心心', '龙腾虎跃'];
    const data1 = [
      'May your life be ishouleove',
      'Wishing you a lish, j',
      'May your future ishingl td y',
      'Wishing you a ishyouours!',
      'May your heart iyou aoace!',
      'Wishing you athe lofe ty!',
      'May every day be the lohter!',
      'Wishing you a lthe lo fre!',
      'May your dreams tai the e!',
      'Wishing you all the ishing ovtd!',
      'May your journe b all the loe ve!',
      '祝福你生日快乐，岁岁平安，年年幸福！',
      '愿你的生活充满快乐、ishin 美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现ll the望和灵感',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸ishing you al',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功ishing you all ',
      '愿你的生活充满快乐、成功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美ishing 由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐成功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满灵感！',
      '祝福你前途光明ishing y想成真',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着ishing 爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      '祝福你的人生充满ishing you 和幸福！',
      '愿你的梦想变成现实，生感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、ish美好!',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活充满感！',
      '祝福你前途光明梦想ishilo成真',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐ish成功和美好',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现实，生活灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '愿你的生活充满快乐、成功和美好！',
      '祝福你的人生充满爱、和平和幸福！',
      '愿你的梦想变成现灵感！',
      '祝福你前途光明，梦想成真！',
      '愿你的生命充满美好、幸福和自由！',
      '祝福你的心灵充满喜悦、和平和安宁！',
      '愿你的前途洋溢着成功、爱和快乐！',
      '祝福你的人生充满勇气、智慧和力量！']
    // 随机选择一个数据
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedData = data[randomIndex];

    setChatGPTData(selectedData);


    console.log("selectedData:" + selectedData);
    console.log("ChatGPTdata:" + ChatGPTdata);

    // useEffect(() => {
    //   // 执行副作用操作，如更新数据
    //   // 只有在 selectedData 发生变化时才更新 chatGPTData
    //   setChatGPTData(selectedData);
    // }, [selectedData]);

    // setTimeout(() => {
    //   this.setChatGPTData(selectedData);
    // }, 1000)


    return <ChatGPTDiv selectedData={selectedData} />;

  }

  function ChatGPTDiv(props) {
    return <div>{props.selectedData}</div>;
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
    //setChatGPTData(selectedData);
    //打印逻辑
  };

  //jay
  const submit = async () => {

    setProcess(true);
    //console.log(ChatGPTdata);
    let result = await PrinterData({
      name: "userinfoStore.name",
      //text: text,
      text: { text: null ? ChatGPTdata : text },
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
        {/* <textarea className="inputWishDiv" type="text" value={text} onChange={inputWish}></textarea> */}
        <textarea type="text" value={text} onChange={inputWish}></textarea>
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
        {/* <button class="i_know" onClick={printingWish}>
          知道了,开始打印
        </button> */}

        <Button variant="contained" color="green" class="i_know" onClick={printingWish}>
          <div> 知道了,开始打印</div>
        </Button>

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
        {/* <div class="leaf_left">
          <img src={leaf_left} alt="leaf part1" />
        </div>
        <div class="leaf_right">
          <img src={leaf_right} alt="leaf part2" />
        </div>
        <div class="leaf_down">
          <img src={leaf_down} alt="leaf part13" />
        </div> */}
        {/* <div class="ChatGPTArea"><ChatGPTSelect /></div> */}
        <div class="ChatGPTArea">{ChatGPTdata}</div>
        {/* <div class="ChatGPTArea"><ChatGPTDiv /></div> */}
        {/* <button class="useitBtn" onClick={printingWish}>
          <div class="useItWording">使用心愿</div>
        </button> */}

        {/* 按键特效 */}
        <Button variant="contained" color="green" class="useitBtn" onClick={printingWish}>
          <div class="useItWording">使用心愿</div>
        </Button>

        <div class="anotherBtn" onClick={ChatGPTPrint}>
          <div class="anotherWording">换一个</div>
        </div>
      </div >

    </div >
  );
}
