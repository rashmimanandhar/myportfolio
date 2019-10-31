import AppTimelineInfo from "../components/AppTimelineInfo";
import AppTimelineCircle from "../components/AppTimelineCircle";

export default {
  props: {
    border: {
      type: Boolean,
      required: true
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
