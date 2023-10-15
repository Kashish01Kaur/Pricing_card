import { Component } from '@angular/core';

 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'assign2';

  content = [

    {

      plan : 'Free',

      price : 0,

      desc : [{

        name: 'Single User',

        isDisabled : false

      },

      {

        name: '5GB Storage',

        isDisabled: false

      },

      {

        name: 'Unlimited Public Projects',

        isDisabled : false

      },

      {

        name: 'Community Access',

        isDisabled : false

      },

      {

        name: 'Unlimited Private Projects',

        isDisabled : true

      },

      {

        name: 'Dedicated Phone Support',

        isDisabled : true

      },

      {

        name: 'Free Subdomain',

        isDisabled : true

      },

      {

        name: 'Monthly Status Reports',

        isDisabled : true

      }]

    },

    {

      plan : 'Plus',

      price : 9,

      desc : [{

        name: '5 Users',

        isDisabled : false

      },

      {

        name: '50GB Storage',

        isDisabled: false

      },

      {

        name: 'Unlimited Public Projects',

        isDisabled : false

      },

      {

        name: 'Community Access',

        isDisabled : false

      },

      {

        name: 'Unlimited Private Projects',

        isDisabled : false

      },

      {

        name: 'Dedicated Phone Support',

        isDisabled : false

      },

      {

        name: 'Free Subdomain',

        isDisabled : false

      },

      {

        name: 'Monthly Status Reports',

        isDisabled : true

      }]

    },

    {

      plan : 'Pro',

      price : 49,

      desc : [{

        name: 'Unlimited Users',

        isDisabled : false

      },

      {

        name: '150GB Storage',

        isDisabled: false

      },

      {

        name: 'Unlimited Public Projects',

        isDisabled : false

      },

      {

        name: 'Community Access',

        isDisabled : false

      },

      {

        name: 'Unlimited Private Projects',

        isDisabled : false

      },

      {

        name: 'Dedicated Phone Support',

        isDisabled : false

      },

      {

        name: 'Unlimited Free Subdomains',

        isDisabled : false

      },

      {

        name: 'Monthly Status Reports',

        isDisabled : false

      }]

    }

   

 

   ];

 

  }

 

 