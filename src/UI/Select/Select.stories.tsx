
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React, {useState} from "react";
import Select from "./Select";

export default {
    title:'cubano/select',
    component:Select
} as ComponentMeta<typeof Select>

const Template:ComponentStory<typeof Select> = (args) => {
    const [selected,setSelected] = useState('selected')
    return <Select {...args} selected={selected} setSelected={setSelected}/>
}
export const Primary = Template.bind({})
Primary.args = {
    options:['first','second','third']
}