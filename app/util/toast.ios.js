/**
 * 文件名称：Duidemo
 * 文件作者：YoungSherlockHolmes
 * 编写日期：2017年01月11日
 * 版权所有：湖南速微消费科技有限公司
 * 个人官网：http://www.051z.cc
 * 开源地址：https://github.com/YoungSherlockHolmes/Dui
 */
import toast from '@remobile/react-native-toast';

function show(message) {
  toast.showShortBottom(message);
}

function showLong(message) {
  toast.showLongBottom(message);
}

export default {
  show,
  showLong
};
