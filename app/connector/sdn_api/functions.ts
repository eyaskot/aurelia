import * as hasuraSdk from "@hasura/ndc-lambda-sdk";
import { Api, HealthzResponse, SdnResponse } from "./api";

const api = new Api({
  baseUrl: `${process.env.NDC_OAS_BASE_URL}`,
});

/**
 * Healthz
 * @request GET :/healthz
 * @allowrelaxedtypes
 * @readonly
 */
export async function getHealthzHealthzHealthzGet(
  headers?: hasuraSdk.JSONValue,
): Promise<HealthzResponse> {
  const result = await api.healthz.healthzHealthzGet({
    params: {
      headers: (headers?.value as Record<string, string>) ?? undefined,
    },
  });
  if (result.data) {
    return result.data;
  } else {
    throw result.error;
  }
}

/**
 * Getsdn
 * @request GET :/getsdn
 * @allowrelaxedtypes
 * @readonly
 */
export async function getGetsdnGetsdnGetsdnGet(
  query: {
    /** Case-insensitive contains match on SDN name */
    name: string;
  },
  headers?: hasuraSdk.JSONValue,
): Promise<SdnResponse> {
  const result = await api.getsdn.getsdnGetsdnGet({
    query: query,
    params: {
      headers: (headers?.value as Record<string, string>) ?? undefined,
    },
  });
  if (result.data) {
    return result.data;
  } else {
    throw result.error;
  }
}
