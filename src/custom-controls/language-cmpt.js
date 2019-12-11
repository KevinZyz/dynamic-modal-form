import React from "react";
import { Radio } from "antd";

const languageMap = [
  {
    label: "中文",
    value: "chinese"
  },
  {
    label: "英语",
    value: "english"
  },
  {
    label: "法文",
    value: "franch"
  },
  {
    label: "日文",
    value: "japanese"
  }
];
// const LanguageCmpt = props => {
//   const { disabled, showSelect, value } = props;

//   const renderRadioItem = item => {
//     if (showSelect && value !== item.value) return null;
//     return (
//       <Radio.Button value={item.value} key={item.value}>
//         {item.label}
//       </Radio.Button>
//     );
//   };
//   return (
//     <Radio.Group defaultValue={value || "a"} disabled={disabled}>
//       {languageMap.map(item => {
//         return renderRadioItem(item);
//       })}
//     </Radio.Group>
//   );
// };

/** 语言自定义控件 */
class LanguageCmpt extends React.PureComponent {
  /** 渲染单选框的每一项 */
  renderRadioItem = item => {
    const { showSelect, value } = this.props;
    if (showSelect && value !== item.value) return null;
    return (
      <Radio.Button value={item.value} key={item.value}>
        {item.label}
      </Radio.Button>
    );
  };

  /** 选项切换时执行的回调 */
  handleChange = e => {
    const { onChange } = this.props;
    const value = e.target.value;
    onChange(value);
  };

  render() {
    const { disabled, value } = this.props;
    return (
      <Radio.Group
        defaultValue={value || "chinese"}
        disabled={disabled}
        onChange={e => this.handleChange(e)}
      >
        {languageMap.map(item => {
          return this.renderRadioItem(item);
        })}
      </Radio.Group>
    );
  }
}

export default LanguageCmpt;
