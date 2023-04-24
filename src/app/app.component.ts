import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;

  images = [
    {
      title: 'At the Beach',
      url: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=300'
    },

    {
      title: 'At the City',
      url: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      title: 'At the Park',
      url: 'https://images.pexels.com/photos/160934/bench-blue-sky-city-160934.jpeg'
    },

    {
      title: 'At the Mall',
      url: 'https://media.istockphoto.com/id/177769689/photo/modern-shopping-mall-interior.jpg?s=612x612&w=is&k=20&c=DwvwiarpNHbMvf0k7bcl5v8l77UcBabhxbaJW3DyEjo='
    },

    {
      title: 'At the Theatre',
      url: 'https://images.pexels.com/photos/274098/pexels-photo-274098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'At the Beach',
      url: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=300'
    },

    {
      title: 'At the City',
      url: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      title: 'At the Park',
      url: 'https://images.pexels.com/photos/160934/bench-blue-sky-city-160934.jpeg'
    },

    {
      title: 'At the Mall',
      url: 'https://media.istockphoto.com/id/177769689/photo/modern-shopping-mall-interior.jpg?s=612x612&w=is&k=20&c=DwvwiarpNHbMvf0k7bcl5v8l77UcBabhxbaJW3DyEjo='
    },

    {
      title: 'At the Theatre',
      url: 'https://images.pexels.com/photos/274098/pexels-photo-274098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'At the Beach',
      url: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=300'
    },

    {
      title: 'At the City',
      url: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      title: 'At the Park',
      url: 'https://images.pexels.com/photos/160934/bench-blue-sky-city-160934.jpeg'
    },

    {
      title: 'At the Mall',
      url: 'https://media.istockphoto.com/id/177769689/photo/modern-shopping-mall-interior.jpg?s=612x612&w=is&k=20&c=DwvwiarpNHbMvf0k7bcl5v8l77UcBabhxbaJW3DyEjo='
    },

    {
      title: 'At the Theatre',
      url: 'https://images.pexels.com/photos/274098/pexels-photo-274098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, 
    {
      title: 'At the Beach',
      url: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=300'
    },

    {
      title: 'At the City',
      url: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      title: 'At the Park',
      url: 'https://images.pexels.com/photos/160934/bench-blue-sky-city-160934.jpeg'
    },

    {
      title: 'At the Mall',
      url: 'https://media.istockphoto.com/id/177769689/photo/modern-shopping-mall-interior.jpg?s=612x612&w=is&k=20&c=DwvwiarpNHbMvf0k7bcl5v8l77UcBabhxbaJW3DyEjo='
    },

    {
      title: 'At the Theatre',
      url: 'https://images.pexels.com/photos/274098/pexels-photo-274098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }, 
    {
      title: 'At the Beach',
      url: 'https://images.pexels.com/photos/3601422/pexels-photo-3601422.jpeg?auto=compress&cs=tinysrgb&w=300'
    },

    {
      title: 'At the City',
      url: 'https://images.pexels.com/photos/1510595/pexels-photo-1510595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },

    {
      title: 'At the Park',
      url: 'https://images.pexels.com/photos/160934/bench-blue-sky-city-160934.jpeg'
    },

    {
      title: 'At the Mall',
      url: 'https://media.istockphoto.com/id/177769689/photo/modern-shopping-mall-interior.jpg?s=612x612&w=is&k=20&c=DwvwiarpNHbMvf0k7bcl5v8l77UcBabhxbaJW3DyEjo='
    },

    {
      title: 'At the Theatre',
      url: 'https://images.pexels.com/photos/274098/pexels-photo-274098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  checkWindowIndex(index: number){
    return Math.abs(this.currentPage - index) < 5;
  }

 
}
