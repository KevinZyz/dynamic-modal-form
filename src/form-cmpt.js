import React, { PureComponent } from "react";
import { Form } from "antd";

// const FormCmpt = props => {
//   const { formDataSource, form } = props;
//   const { getFieldDecorator } = form;

//   return (
//     <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }}>
//       {formDataSource.map(item => {
//         const { fieldName, labelName, cmpt, fieldOptions } = item;
//         return (
//           <Form.Item label={labelName} key={fieldName}>
//             {getFieldDecorator(fieldName, fieldOptions)(cmpt)}
//           </Form.Item>
//         );
//       })}
//     </Form>
//   );
// };

class FormCmpt extends PureComponent {
  /** 渲染表单的每一项 */
  renderFormItem = item => {
    const {
      fieldName,
      fieldOptions,
      label,
      cmpt,
      cmptProps,
      hidden,
      dynamicHidden
    } = item;
    const { form } = this.props;
    const { getFieldDecorator } = form;
    let hiddenItem = hidden;
    if (dynamicHidden) {
      const values = form.getFieldsValue();
      const value = values[fieldName];
      hiddenItem = dynamicHidden(value, values);
    }
    return (
      <Form.Item
        label={label}
        key={fieldName}
        style={hiddenItem && { display: "none" }}
      >
        {getFieldDecorator(fieldName, fieldOptions)(
          cmpt({ form, ...cmptProps })
        )}
      </Form.Item>
    );
  };
  render() {
    const { formItemMap, formItemLayout } = this.props;

    return (
      <Form {...formItemLayout}>
        {formItemMap.map(item => this.renderFormItem(item))}
      </Form>
    );
  }
}
const WrappedFormCmpt = Form.create({
  name: "form",
  mapPropsToFields(props) {
    const { values } = props;
    const fields = {};
    Object.keys(values).forEach(key => {
      fields[key] = Form.createFormField({
        value: values[key]
      });
    });
    return fields;
  }
})(FormCmpt);
export default WrappedFormCmpt;
