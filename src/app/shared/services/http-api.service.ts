import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  baseUrl = 'https://dapi.vurtech.in/';
  dataAPI: any = {};

  constructor(
    private _http: HttpClient
  ) {
    this.dataAPI = {
      login: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/login`, data);
      },

      // Common-Leads
      commonLeadsSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/common_leads/save`, data);
      },
      commonLeadsPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/common_leads/common_leads_PageList`, data);
      },
      commonLeadsGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/common_leads/getbyid/${srNo}`);
      },
      commonLeadsGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/common_leads/getall`);
      },
      commonLeads_LeadForList: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/common_leads/leadfor_list`, data);
      },
      commonLeads_FromSiteList: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/common_leads/from_site_list`, data);
      },

      // company faq
      companyFaqSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_faq/save`, data);
      },
      companyFaqPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_faq/company_faq_PageList`, data);
      },
      companyFaqGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_faq/getbyid/${srNo}`);
      },
      companyFaqRelatedTo: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/company_faq/related_to`, data);
      },

      // whom to connect
      whomToConnectSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/whom_to_contact/save`, data);
      },
      whomToConnectForFaq: (faqId: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/whom_to_contact/forfaq/${faqId}`);
      },
      whomToConnectGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/whom_to_contact/getbyid/${srNo}`);
      },

      // Company-Agenda
      companyAgendaSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda/save`, data);
      },
      companyAgendaPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda/company_agenda_PageList`, data);
      },
      companyAgendaGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda/getbyid/${srNo}`);
      },
      companyAgendaOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda/onlyname`, data);
      },
      companyAgendaGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda/getall`);
      },
      companyAgendaMyAgenda: (empsrno: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda/myagenda/${empsrno}`);
      },

      // Company-Agenda-People
      companyAgendaPeopleSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_people/save`, data);
      },
      companyAgendaPeoplePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_people/company_agenda_people_PageList`, data);
      },
      companyAgendaPeopleGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda_people/getbyid/${srNo}`);
      },
      companyAgendaPeopleOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_people/onlyname`, data);
      },
      companyAgendaPeopleGetAll: (foragenda: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda_people/getall/${foragenda}`);
      },

      // Company-Agenda-Track
      companyAgendaTrackSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_track/save`, data);
      },
      companyAgendaTrackPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_track/company_agenda_track_PageList`, data);
      },
      companyAgendaTrackGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda_track/getbyid/${srNo}`);
      },
      companyAgendaTrackOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/company_agenda_track/onlyname`, data);
      },
      companyAgendaTrackGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/company_agenda_track/getall`);
      },

      // Source Client
      sourceClientSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/source_client/save`, data);
      },
      sourceClientPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/source_client/source_client_PageList`, data);
      },
      sourceClientGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/source_client/getbyid/${srNo}`);
      },
      sourceClientGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/source_client/getall`);
      },
      sourceMasterOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/source_client/onlyname`, data);
      },

      // web numbers
      webNumbersSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/web_numbers/save`, data);
      },
      webNumbersPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/web_numbers/web_numbers_PageList`, data);
      },
      webNumbersGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/web_numbers/getbyid/${srNo}`);
      },
      webNumbersGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/web_numbers/getall`);
      },
      webNumbersWebData: (forsite: any, forproduct: any) => {
        return this.getAjaxMethod(`${this.baseUrl}api/web_numbers/web_data/${forsite}-${forproduct}`);
      },
      webNumbersOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/web_numbers/onlyname`, data);
      },

      // Enquiry
      enquirySave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/enquiry/save`, data);
      },
      enquiryPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/enquiry/enquiry_PageList`, data);
      },
      enquiryGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/enquiry/getbyid/${srNo}`);
      },
      enquiryGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/enquiry/getall`);
      },
      enquirySiteListGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/enquiry/enquiry_sitelist`);
      },
      enquiryOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/enquiry/onlyname`, data);
      },

      // Product Category
      productCategorySave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productcategory/save`, data);
      },
      productCategoryPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productcategory/productcategory_PageList`, data);
      },
      productCategoryGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/productcategory/getbyid/${srNo}`);
      },
      productCategoryGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/productcategory/getall`);
      },
      productCategoryOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/productcategory/onlyname`, data);
      },

      // Product Category Module
      productCategoryModuleSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productcategory_modules/save`, data);
      },
      productCategoryModulePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productcategory_modules/productcategory_modules_PageList`, data);
      },
      productCategoryModuleGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/productcategory_modules/getbyid/${srNo}`);
      },
      productCategoryModuleGetAll: (categoryId: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/productcategory_modules/getall/${categoryId}`);
      },
      productCategoryModuleGetByProductSrNo: (psrno: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/productcategory_modules/get_product_modules/${psrno}`);
      },

      // Product Master
      productMasterSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productmaster/save`, data);
      },
      productMasterPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/productmaster/productmaster_PageList`, data);
      },
      productMasterGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/productmaster/getbyid/${srNo}`);
      },
      productMasterGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/productmaster/getall`);
      },
      productMasterOnlyName: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/productmaster/onlyname`, data);
      },

      // JobLocation
      jobLocationSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_location/save`, data);
      },
      jobLocationPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_location/job_location_PageList`, data);
      },
      jobLocationGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_location/getbyid/${srNo}`);
      },
      jobLocationGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_location/getall`);
      },
      jobLocationOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/job_location/onlyname`, data);
      },

      // JobDepartment
      jobDepartmentSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_department/save`, data);
      },
      jobDepartmentPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_department/job_department_PageList`, data);
      },
      jobDepartmentGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_department/getbyid/${srNo}`);
      },
      jobDepartmentGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_department/getall`);
      },
      jobDepartmentOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/job_department/onlyname`, data);
      },

      // Job
      jobSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job/save`, data);
      },
      jobPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job/job_PageList`, data);
      },
      jobGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job/getbyid/${srNo}`);
      },
      jobGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/job/getall`);
      },
      jobOnSiteGetAll: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/job/job_onsite`, data);
      },

      // Job Child
      jobChildSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_child/save`, data);
      },
      jobChildPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_child/job_child_PageList`, data);
      },
      jobChildGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_child/getbyid/${srNo}`);
      },
      jobChildGetAll: (jobSrNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_child/getall/${jobSrNo}`);
      },

      // JobApply
      jobApplySave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_apply/save`, data);
      },
      jobApplyPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_apply/job_apply_PageList`, data);
      },
      jobApplyGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_apply/getbyid/${srNo}`);
      },
      jobApplyGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_apply/getall`);
      },

      // JobApplyChild
      jobApplyChildSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_applychild/save`, data);
      },
      jobApplyChildPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/job_applychild/job_applychild_PageList`, data);
      },
      jobApplyChildGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_applychild/getbyid/${srNo}`);
      },
      jobApplyChildGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/job_applychild/getall`);
      },


      // newsfeed
      newsFeedSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/newsfeed/save`, data);
      },
      newsFeedPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/newsfeed/newsfeed_PageList`, data);
      },
      newsFeedGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/newsfeed/getbyid/${srNo}`);
      },
      newsFeedGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/newsfeed/getall`);
      },

      // payment type
      paymentTypeSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/payment_type/save`, data);
      },
      paymentTypePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/payment_type/payment_type_PageList`, data);
      },
      paymentTypeGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/payment_type/getbyid/${srNo}`);
      },
      paymentTypeGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/payment_type/getall`);
      },
      paymentTypeOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/payment_type/onlyname`, data);
      },

      // Send Address
      sendAddressSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/sendaddressmaster/save`, data);
      },
      sendAddressPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/sendaddressmaster/sendaddressmaster_PageList`, data);
      },
      sendAddressGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/sendaddressmaster/getbyid/${srNo}`);
      },
      sendAddressGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/sendaddressmaster/getall`);
      },

      // client Status
      clientStatusSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/client_status/save`, data);
      },
      clientStatusPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/client_status/client_status_PageList`, data);
      },
      clientStatusGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/client_status/getbyid/${srNo}`);
      },
      clientStatusGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/client_status/getall`);
      },
      clientStatusOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/client_status/onlyname`, data);
      },

      // VIPL Popup
      viplPopupSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_popup/save`, data);
      },
      viplPopupPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_popup/vipl_popup_PageList`, data);
      },
      viplPopupGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_popup/getbyid/${srNo}`);
      },
      viplPopupeGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_popup/getall`);
      },

      // VIPL Download
      viplDownloadSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipldownload/save`, data);
      },
      viplDownloadPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipldownload/vipldownload_PageList`, data);
      },
      viplDownloadGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipldownload/getbyid/${srNo}`);
      },
      viplDownloadGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipldownload/getall`);
      },

      // Vipl Price
      viplPriceSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplprice/save`, data);
      },
      viplPricePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplprice/viplprice_PageList`, data);
      },
      viplPriceGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplprice/getbyid/${srNo}`);
      },
      viplPriceGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplprice/getall`);
      },
      viplPriceGetByProductId: (productId: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplprice/getproductprice/${productId}-apq_43`);
      },
      viplPriceOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/viplprice/onlyname`, data);
      },

      // VIPL Region
      viplRegionSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_region/save`, data);
      },
      viplRegionPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_region/vipl_region_PageList`, data);
      },
      viplRegionGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_region/getbyid/${srNo}`);
      },
      viplRegionGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_region/getall`);
      },
      viplRegionOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_region/onlyname`, data);
      },

      // Vipl Customer
      viplCustomerSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplcustomer/save`, data);
      },
      viplCustomerPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplcustomer/viplcustomer_PageList`, data);
      },
      viplCustomerGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplcustomer/getbyid/${srNo}`);
      },
      viplCustomerOnlyName: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/viplcustomer/onlyname`, data);
      },

      // vipl Assets
      viplAssetsSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplassets/save`, data);
      },
      viplAssetsPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplassets/viplassets_PageList`, data);
      },
      viplAssetsGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplassets/getbyid/${srNo}`);
      },
      viplAssetsGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplassets/getall`);
      },
      viplAssetsOnlyName: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/viplassets/onlyname`, data);
      },

      //vipl assets callback
      viplAssetsCallBackSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_assets_callback/save`, data);
      },
      viplAssetsCallBackPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_assets_callback/vipl_assets_callback_PageList`, data);
      },
      viplAssetsCallBackGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_assets_callback/getbyid/${srNo}`);
      },
      viplAssetsCallBackGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_assets_callback/getall`);
      },
      viplAssetsCallBackOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_assets_callback/onlyname`, data);
      },

      // vipl Review
      viplReviewSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplreview/save`, data);
      },
      viplReviewPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplreview/viplreview_PageList`, data);
      },
      viplReviewGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplreview/getbyid/${srNo}`);
      },
      viplReviewGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplreview/getall`);
      },

      // vipl Upload
      viplUploadSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplupload/save`, data);
      },
      viplUploadPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/viplupload/viplupload_PageList`, data);
      },
      viplUploadGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplupload/getbyid/${srNo}`);
      },
      viplUploadGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/viplupload/getall`);
      },

      //vipl callback status
      viplCallBackStatusSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_cb_status/save`, data);
      },
      viplCallBackStatusPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_cb_status/vipl_cb_status_PageList`, data);
      },
      viplCallBackStatusGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_cb_status/getbyid/${srNo}`);
      },
      viplCallBackStatusGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_cb_status/getall`);
      },
      viplCallBackStatusOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_callback_status/onlyname`, data);
      },

      //request customer callback
      reqCustomerCallBackSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/request_customer_callback/save`, data);
      },
      reqCustomerCallBackPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/request_customer_callback/request_customer_callback_PageList`, data);
      },
      reqCustomerCallBackGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/request_customer_callback/getbyid/${srNo}`);
      },
      reqCustomerCallBackGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/request_customer_callback/getall`);
      },

      //majorIssue
      majorIssueSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/major_issue/save`, data);
      },
      majorIssuePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/major_issue/major_issue_PageList`, data);
      },
      majorIssueGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/major_issue/getbyid/${srNo}`);
      },
      majorIssueGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/major_issue/getall`);
      },
      majorIssueOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/major_issue/onlyname`, data);
      },

      // order form
      orderFormSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/order_form/save`, data);
      },
      orderFormPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/order_form/order_form_PageList`, data);
      },
      orderFormGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/order_form/getbyid/${srNo}`);
      },
      orderFormGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/order_form/getall`);
      },
      orderFormOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/order_form/onlyname`, data);
      },

      // order form table
      orderFormTableSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/order_form_table/save`, data);
      },
      orderFormTablePageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/order_form_table/order_form_table_PageList`, data);
      },
      orderFormTableGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/order_form_table/getbyid/${srNo}`);
      },
      orderFormTableGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/order_form_table/getall`);
      },

      // Important Client
      importantClientSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/important_client/save`, data);
      },
      importantClientPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/important_client/important_client_PageList`, data);
      },
      importantClientGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/important_client/getbyid/${srNo}`);
      },
      importantClientGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/important_client/getall`);
      },

      // Online Payments
      onlinePaymentsSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/online_payments/save`, data);
      },
      onlinePaymentsPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/online_payments/online_payments_PageList`, data);
      },
      onlinePaymentsGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/online_payments/getbyid/${srNo}`);
      },
      onlinePaymentsGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/online_payments/getall`);
      },

      // Transfer to Senior
      transferToSeniorSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/transfer_to_senior/save`, data);
      },
      transferToSeniorPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/transfer_to_senior/transfer_to_senior_PageList`, data);
      },
      transferToSeniorGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/transfer_to_senior/getbyid/${srNo}`);
      },
      transferToSeniorGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/transfer_to_senior/getall`);
      },

      // Partner Request
      partnerRequestSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/partner_request/save`, data);
      },
      partnerRequestPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/partner_request/partner_request_PageList`, data);
      },
      partnerRequestGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/partner_request/getbyid/${srNo}`);
      },
      partnerRequestGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/partner_request/getall`);
      },

      getOTP: (code: number, mobileNo: string) => {
        return this.postAjaxMethod(`${this.baseUrl}api/user_login/getotp/${code}-${mobileNo}`, '');
      },
      verifyOTP: (code: number, mobileno: string, otp: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/user_login/verifyotp/${code}-${mobileno}-${otp}`);
      },
      updatePassword: (forWhom: number, mobileNo: string, otpReceived: string, newPin: string) => {
        return this.postAjaxMethod(`${this.baseUrl}api/user_login/update_pin/${forWhom}-${mobileNo}-${otpReceived}-${newPin}`, '');
      },

      //demo-install
      demoInstallSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/demo_install/save`, data);
      },
      demoInstallPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/demo_install/demo_install_PageList`, data);
      },
      demoInstallGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/demo_install/getbyid/${srNo}`);
      },
      demoInstallGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/demo_install/getall`);
      },
      demoInstallOnlyName: () => {
        const data = {code: 0, inputtext: 'string'};
        return this.postAjaxMethod(`${this.baseUrl}api/demo_install/onlyname`, data);
      },

      // important dates api
      importantDatesSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/important_dates/save`, data);
      },
      importantDatesPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/important_dates/important_dates_PageList`, data);
      },
      importantDatesGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/important_dates/getbyid/${srNo}`);
      },
      importantDatesGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/important_dates/getall`);
      },
      reminderTypeOnlyName: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/important_dates/remindertype`, data);
      },

      // payment for api
      paymentForSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_payment_for/save`, data);
      },
      paymentForPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_payment_for/vipl_payment_for_PageList`, data);
      },
      paymentForGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_payment_for/getbyid/${srNo}`);
      },
      paymentForGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/vipl_payment_for/getall`);
      },
      viplPaymentForOnlyName: (code: number, text: string) => {
        const data = {code: code, inputtext: text};
        return this.postAjaxMethod(`${this.baseUrl}api/vipl_payment_for/onlyname`, data);
      },

      // payment collection api
      paymentCollectionSave: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/payment_collection/save`, data);
      },
      paymentCollectionPageList: (data: any) => {
        return this.postAjaxMethod(`${this.baseUrl}api/payment_collection/payment_collection_PageList`, data);
      },
      paymentCollectionGetById: (srNo: number) => {
        return this.getAjaxMethod(`${this.baseUrl}api/payment_collection/getbyid/${srNo}`);
      },
      paymentCollectionGetAll: () => {
        return this.getAjaxMethod(`${this.baseUrl}api/payment_collection/getall`);
      },
    };
  }

  getAjaxMethod(url: any) {
    return this._http.get(url);
  }

  postAjaxMethod(url: any, data: any) {
    return this._http.post(url, data);
  }
}
