import React, { useState, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import ModalCmpt from "./modal-cmpt";
import FormCmpt from "./form-cmpt";
import { formA } from "./forms";

import "./styles.css";
import "antd/dist/antd.css";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const formRef = useRef();
  const handleClick = () => {
    setModalVisible(true);
  };

  /** 弹窗点击确定时，执行的回调函数 */
  const handleModalOk = useCallback(() => {
    /** 获取到表单组件的实例 */
    const formContext = formRef.current;
    const { form } = formContext.props;

    /** 获取到表单域所有值 */
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      console.log("Received values of form: ", values);
    });
  }, []);

  /** 弹窗点击取消时，执行的回调函数 */
  const handleModalCancel = useCallback(() => {
    setModalVisible(false);
  }, []);

  /** 渲染弹窗主体内容 */
  const renderModalContent = useCallback(() => {
    const props = {
      formItemMap: formA(),
      wrappedComponentRef: formRef,
      showTabs: true,
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 18 }
      },
      values: {
        fdId: "12333322cssdf",
        username: "张锐",
        gender: "female",
        language: "chinese"
      }
    };
    return <FormCmpt {...props} />;
  }, []);

  /** 渲染弹窗组件 */
  const renderModalCmpt = () => {
    const props = {
      title: "Basic Modal",
      visible: modalVisible,
      handleModalOk,
      handleModalCancel,
      content: renderModalContent()
    };

    return <ModalCmpt {...props} />;
  };
  return (
    <div className="App">
      <div onClick={() => handleClick()}>点击触发弹窗</div>
      {renderModalCmpt()}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
