import {Component} from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngxFormly';
  loading = false;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(ev => {
      if (ev instanceof NavigationStart) {
        this.loading = true;
      }
      if (
        ev instanceof NavigationEnd ||
        ev instanceof NavigationCancel ||
        ev instanceof NavigationError
      ) {
        this.loading = false;
      }

      const rt = this.getChild(this.activatedRoute);

      rt.data.subscribe((data: any) => {
        // console.log(data);
        this.titleService.setTitle(data.title);

        if (data.dcTitle) {
          this.metaService.updateTag({name: 'DC.title', content: data.dcTitle});
        } else {
          this.metaService.removeTag('name=\'DC.title\'');
        }

        if (data.descrption) {
          this.metaService.updateTag({name: 'description', content: data.descrption});
        } else {
          this.metaService.removeTag('name=\'description\'');
        }

        if (data.keywords) {
          this.metaService.updateTag({name: 'keywords', content: data.keywords});
        } else {
          this.metaService.updateTag({name: 'keywords', content: ''});
        }

        if (data.ogTitle) {
          this.metaService.updateTag({property: 'og:title', content: data.ogTitle});
        } else {
          this.metaService.removeTag('property=\'og:title\'');
        }

        if (data.ogType) {
          this.metaService.updateTag({property: 'og:type', content: data.ogType});
        } else {
          this.metaService.removeTag('property=\'og:type\'');
        }

        if (data.ogUrl) {
          this.metaService.updateTag({property: 'og:url', content: data.ogUrl});
        } else {
          this.metaService.updateTag({property: 'og:url', content: this.router.url});
        }

        if (data.ogImage) {
          this.metaService.updateTag({property: 'og:image', content: data.ogImage});
        } else {
          this.metaService.removeTag('property=\'og:image\'');
        }

        if (data.ogImageType) {
          this.metaService.updateTag({property: 'og:image:type', content: data.ogImageType});
        } else {
          this.metaService.removeTag('property=\'og:image:type\'');
        }

        if (data.ogImageWidth) {
          this.metaService.updateTag({property: 'og:image:width', content: data.ogImageWidth});
        } else {
          this.metaService.removeTag('property=\'og:image:width\'');
        }

        if (data.ogImageHeight) {
          this.metaService.updateTag({property: 'og:image:height', content: data.ogImageHeight});
        } else {
          this.metaService.removeTag('property=\'og:image:height\'');
        }

        if (data.ogSite_name) {
          this.metaService.updateTag({property: 'og:site_name', content: data.ogSite_name});
        } else {
          this.metaService.removeTag('property=\'og:site_name\'');
        }

        if (data.ogDescription) {
          this.metaService.updateTag({property: 'og:description', content: data.ogDescription});
        } else {
          this.metaService.removeTag('property=\'og:description\'');
        }
      });
    });

    window.addEventListener('load', function () {
      if (localStorage.getItem('web_browser') == null) {
        // new tab
        localStorage.setItem('web_browser', 'true');
        window.addEventListener('unload', function () {
          localStorage.removeItem('web_browser');
        });
      } else {
        // duplicate tab
        alert('duplicate tab');
        return;
      }
    });
  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

}
