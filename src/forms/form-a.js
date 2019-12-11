import React from "react";
import { Input } from "antd";
import { LanguageCmpt, GenderCmpt } from "../custom-controls";

export function formA() {
  return [
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
