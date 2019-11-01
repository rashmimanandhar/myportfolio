import AppTimelineInfo from "../components/AppTimelineInfo";
import AppTimelineCircle from "../components/AppTimelineCircle";

export default {
  props: {
    border: {
      type: Boolean,
      required: true
    },
    top:{
      type: Boolean,
      default:false
    },
    bottom:{
      type: Boolean,
      default:false
    },
    content: {
      type: Object,
      required: true
    }
  },
  components:{
    AppTimelineInfo,
    AppTimelineCircle,
  }
}
