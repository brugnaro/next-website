import ReactSVG from 'react-svg'

const Icon = (props) => {

  const icon = {
    global: <ReactSVG src='static/img/icons/global-lang.svg' style={{ fill: props.color }} className={props.class} />,
    accuracy: <ReactSVG src='static/img/icons/99-accuracy.svg' style={{ fill: props.color }} className={props.class} />,
    protect: <ReactSVG src='static/img/icons/protect-sender reputation.svg' style={{ fill: props.color }} className={props.class} />,
    avoid: <ReactSVG src='static/img/icons/avoid-blockages-ESPs.svg' style={{ fill: props.color }} className={props.class} />,
    increase: <ReactSVG src='static/img/icons/increase-campaigns-ROI.svg' style={{ fill: props.color }} className={props.class} />,
    fast: <ReactSVG src='static/img/icons/fast-email-verification.svg' style={{ fill: props.color }} className={props.class} />,
    affordable: <ReactSVG src='static/img/icons/affordable-prices.svg' style={{ fill: props.color }} className={props.class} />,
    filetypes: <ReactSVG src='static/img/icons/filetypes-compatibility.svg' style={{ fill: props.color }} className={props.class} />,
    bounce: <ReactSVG src='static/img/icons/email-bounce-checker.svg' style={{ fill: props.color }} className={props.class} />,
    catch: <ReactSVG src='static/img/icons/catch-all-checker.svg' style={{ fill: props.color }} className={props.class} />,
    emailtypo: <ReactSVG src='static/img/icons/email-typo-correction.svg' style={{ fill: props.color }} className={props.class} />,
    sintax: <ReactSVG src='static/img/icons/syntax-validation.svg' style={{ fill: props.color }} className={props.class} />,
    domain: <ReactSVG src='static/img/icons/domain-validation.svg' style={{ fill: props.color }} className={props.class} />,
    mailbox: <ReactSVG src='static/img/icons/mailbox-checker.svg' style={{ fill: props.color }} className={props.class} />,
    risk: <ReactSVG src='static/img/icons/risk-validation.svg' style={{ fill: props.color }} className={props.class} />,
    freede: <ReactSVG src='static/img/icons/free-deduplication.svg' style={{ fill: props.color }} className={props.class} />,
    spantrap: <ReactSVG src='static/img/icons/spam-trap-remover.svg' style={{ fill: props.color }} className={props.class} />,
    disposables: <ReactSVG src='static/img/icons/disposables-checker.svg' style={{ fill: props.color }} className={props.class} />,
    payonly: <ReactSVG src='static/img/icons/pay-only-for-results.svg' style={{ fill: props.color }} className={props.class} />,
    antigrey: <ReactSVG src='static/img/icons/anti-greylisting.svg' style={{ fill: props.color }} className={props.class} />
  };

  return icon[props.name]
};

export default Icon;