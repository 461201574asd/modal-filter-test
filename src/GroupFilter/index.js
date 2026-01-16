/* 使用 React + Ant Design 实现一个组合筛选的组件
 点击新增筛选条件可以增加一个筛选项，点击右侧删除按钮支持删掉该筛选项
 左侧是一个下拉框，下拉框的数据是GROUP_FILTER_DATA
 中间是一个下拉框，下拉框的数据是OPERATION_LIST
 如果中间下拉框的值为等于，则右侧是一个输入框，如果中间下拉框的值为属于，则右侧是一个下拉框，下拉框数据是左侧选择的变量的belongList的值
 组件默认值是CommonModal弹窗组件点击提交时的表单值
 组件示例图，见组件示例图.png
 组件数据图，见组件数据图.png
*/

import {GROUP_FILTER_DATA, OPERATION_LIST} from '../data';

const GroupFilter = ({ initialData = [] }) => {
    return (
        <div>
        </div>
    )
}


export default GroupFilter;
