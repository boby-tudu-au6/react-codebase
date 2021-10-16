export const schema = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name",
        // "default": "Chuck"
        // min: 1
      },
      "lastName": {
        "type": "string",
        "title": "Last name",
        "default": "Chuck"
      },
      "telephone": {
        "type": "string",
        "title": "Telephone",
        "minLength": 10
      }
    }
  }
  // const schema = {
  //   type: "object",
  //   required: ['title'],
  //   properties: {
  //     title: {
  //       type: 'string',
  //       title: 'Title',
  //       // default: 'default'
  //     }
  //   }
  // };
 export const uiSchema = {
      'ui:field': 'grid',
      "ui:options": {
        rows: 5
      }
    // title: {
    //   'ui:widget': 'textarea'
    // }
  };
