import React from "react";
import { Input } from "antd";
import { LanguageCmpt, GenderCmpt } from "../custom-controls";

/** 表单描述文件 */
export function formA() {
  return [
    {
      fieldName: "fdId",
      cmpt: args => <Input {...args} />,
      hidden: true
    },
    {
      fieldName: "username",
      label: <span>账户名</span>,
      fieldOptions: {
        rules: [
          {
            required: true,
            min: 2,
            max: 12,
            message: "请输入账户名(2-12个字)"
          },
          {
            /** 特殊校验处理 */
            validator: (rule, value, callback) => {
              const regExp = /snow/gi;
              if (regExp.test(value)) {
                callback([new Error("禁止输入snow关键词")]);
              }
              /** 如果校验通过，则直接调用 callback */
              callback();
            }
          }
        ]
      },
      cmpt: args => <Input {...args} />,
      cmptProps: {
        placeholder: "请输入账户名"
      }
    },
    {
      fieldName: "gender",
      label: "性别",
      fieldOptions: {},
      cmpt: args => <GenderCmpt {...args} />,
      dynamicHidden: (value, values) => {
        if (values.language === "franch") return true;
        return false;
      }
    },
    {
      fieldName: "language",
      label: "语言",
      fieldOptions: {},
      cmpt: args => <LanguageCmpt {...args} />,
      cmptProps: {
        // disabled: true // 按钮组不可选中
        // showSelect: true //特殊需求(只显示选中项，过滤掉未选中项)
      }
    }
  ];
}
