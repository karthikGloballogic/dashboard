// A utility function for making network requests
export async function makeRequest(url, method = "GET", data = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  const fullUrl = "http://localhost:3000/" + url;

  const requestOptions = {
    method,
    headers,
    body: data ? JSON.stringify(data) : null,
  };

  try {
    const response = await fetch(fullUrl, requestOptions);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message || "Network request failed");
    }

    return responseData;
  } catch (error) {
    throw new Error(error.message || "Network request failed");
  }
}
