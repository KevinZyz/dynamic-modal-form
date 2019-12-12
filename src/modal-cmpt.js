import React from "react";
import { Modal } from "antd";

const ModalCmpt = props => {
  const { visible, handleModalOk, handleModalCancel } = props;

  const renderModalContent = () => {
    const { content } = props;
    return content;
  };

  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
    >
      {renderModalContent()}
    </Modal>
  );
};

export default ModalCmpt;
