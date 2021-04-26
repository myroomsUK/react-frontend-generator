export default RecapHeader;
declare function RecapHeader({ primary, secondary, actions }: {
    primary: any;
    secondary: any;
    actions: any;
}): JSX.Element;
declare namespace RecapHeader {
    namespace propTypes {
        const primary: PropTypes.Validator<any>;
    }
}
import PropTypes from "prop-types";
