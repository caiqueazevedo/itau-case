/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter, delay } from 'rxjs/operators';

import { TaskDTO } from '../models/task-dto';
import { Task } from '../models/task';

/**
 * Task Controller
 */
@Injectable({
  providedIn: 'root',
})
class TaskControllerService extends __BaseService {
  static readonly indexUsingGETPath = '/api/v1/tasks';
  static readonly saveUsingPOSTPath = '/api/v1/tasks';
  static readonly showUsingGETPath = '/api/v1/tasks/{id}';
  static readonly updateUsingPUTPath = '/api/v1/tasks/{id}';
  static readonly deleteUsingDELETEPath = '/api/v1/tasks/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * index
   * @return OK
   */
  indexUsingGETResponse(): __Observable<__StrictHttpResponse<Array<TaskDTO>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<TaskDTO>>;
      })
    );
  }
  /**
   * index
   * @return OK
   */
  indexUsingGET(): __Observable<Array<TaskDTO>> {
    return this.indexUsingGETResponse().pipe(
      __map(_r => _r.body as Array<TaskDTO>)
    );
  }

  /**
   * save
   * @param taskDTO taskDTO
   * @return OK
   */
  saveUsingPOSTResponse(taskDTO: TaskDTO): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = taskDTO;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/v1/tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * save
   * @param taskDTO taskDTO
   * @return OK
   */
  saveUsingPOST(taskDTO: TaskDTO): __Observable<Task> {
    return this.saveUsingPOSTResponse(taskDTO).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * show
   * @param id id
   * @return OK
   */
  showUsingGETResponse(id: string): __Observable<__StrictHttpResponse<TaskDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/v1/tasks/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TaskDTO>;
      })
    );
  }
  /**
   * show
   * @param id id
   * @return OK
   */
  showUsingGET(id: string): __Observable<TaskDTO> {
    return this.showUsingGETResponse(id).pipe(
      __map(_r => _r.body as TaskDTO)
    );
  }

  /**
   * update
   * @param params The `TaskControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `taskDTO`: taskDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUTResponse(params: TaskControllerService.UpdateUsingPUTParams): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.taskDTO;

    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/v1/tasks/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * update
   * @param params The `TaskControllerService.UpdateUsingPUTParams` containing the following parameters:
   *
   * - `taskDTO`: taskDTO
   *
   * - `id`: id
   *
   * @return OK
   */
  updateUsingPUT(params: TaskControllerService.UpdateUsingPUTParams): __Observable<Task> {
    return this.updateUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Task)
    );
  }

  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETEResponse(id: string): __Observable<__StrictHttpResponse<Task>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/v1/tasks/${encodeURIComponent(String(id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Task>;
      })
    );
  }
  /**
   * delete
   * @param id id
   * @return OK
   */
  deleteUsingDELETE(id: string): __Observable<Task> {
    return this.deleteUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as Task)
    );
  }
}

module TaskControllerService {

  /**
   * Parameters for updateUsingPUT
   */
  export interface UpdateUsingPUTParams {

    /**
     * taskDTO
     */
    taskDTO: TaskDTO;

    /**
     * id
     */
    id: string;
  }
}

export { TaskControllerService }
