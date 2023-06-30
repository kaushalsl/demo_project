import {AppService} from "@servicesapp.service";
import {AppInjector} from "../../app.module";

const myService = AppInjector.get(AppService);
export const testPath = {
  "demo": {
    id: 1,
    name: 'Test 1',
    value: myService.name
  }
}
