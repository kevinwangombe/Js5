const response = confirm('Do you want to carry out this action?');
if(response)
    // If response is true (Ok)
    console.log('This action will be carried out');
else
    // If the response is false(cancel)
    console.log('This action will not be carried out');
