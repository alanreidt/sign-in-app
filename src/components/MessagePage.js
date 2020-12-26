import Page from '../components/Page';
import Message from '../components/Message';

function MessagePage(props) {
  const {
    type,
    text,
  } = props;

  return (
    <Page>
      <Message type={type}>{text}</Message>
    </Page>
  );
}

export default MessagePage;
