import React from "react";
import { Select } from "antd";
const { Option } = Select;

// const GenderCmpt = props => {
//   const { value } = props;

//   const handleChange = value => {
//     const { onChange } = props;
//     onChange(value);
//   };
//   return (
//     <Select
//       placeholder="Select a option and change input text above"
//       value={value}
//       onChange={e => handleChange(e)}
//     >
//       <Option value="male">male</Option>
//       <Option value="female">female</Option>
//     </Select>
//   );
// };

/** 性别自定义控件 */
class GenderCmpt extends React.PureComponent {
  /** 选择框切换时执行的回调函数 */
  handleChange = value => {
    const { onChange } = this.props;
    onChange(value);
  };
  render() {
    const { value } = this.props;
    return (
      <Select
        placeholder="Select a option and change input text above"
        value={value}
        onChange={value => this.handleChange(value)}
      >
        <Option value="male">male</Option>
        <Option value="female">female</Option>
      </Select>
    );
  }
}

export default GenderCmpt;
