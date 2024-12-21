const deleteConversation = ({ id, title, submit }) => {
  const deleteConfirm = confirm(`Delete chat?`);
  if (!deleteConfirm) return;
  console.log(`Conversation deleted`);

  submit(
    {
      request_type: 'delete_conversation',
      conversation_id: id,
      conversation_title: title,
    },
    {
      method: 'DELETE',
      encType: 'application/x-www-form-urlcoded',
      action: '/',
    },
  );
};

export { deleteConversation };
