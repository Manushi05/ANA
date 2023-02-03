import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState();
  const [details, setDetails] = useState(false);
  const [rowId, setRowId] = useState();
  
  useEffect(() => {
    const fetchdata = async () => {
      let data = await fetch("https://jsonplaceholder.typicode.com/users");
      let parsedData = await data.json();
      console.log(parsedData);
      setUserData(parsedData);
    };
    return () => {
      fetchdata();
    };
  }, []);

  const viewDetails = (id) => {
    setRowId(id)
    console.log(id)
    details?
    setDetails(false):setDetails(true);
  };

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-[90%] bg-gray-100 border border-gray-200 rounded-lg shadow">
          <div className="px-4 py-5 space-y-4">
            {userData &&
              userData.map((user, key) => {
                return (
                  <>
                    <div
                      key={user.id}
                      className="h-36 w-full bg-white flex justify-between items-center px-6"
                    >
                      <div>{user.name}</div>
                      <div>
                        <p className="font-bold">Contact</p>
                        <p>{user.email}</p>
                      </div>
                      <div>
                        <p className="font-bold">City</p>
                        <p>{user.address.city}</p>
                      </div>
                      <div>
                        <p className="font-bold">State</p>
                        <p>{user.address.street}</p>
                      </div>
                      <div>
                        <button
                          className="bg-red-500 text-white rounded-full px-8 py-2"
                          onClick={() => viewDetails(user.id)}
                        >
                          {details?"Hide Details":"View Details"}
                        </button>
                      </div>
                    </div>

                    {
                      details &&
                    <div  className="flex w-full justify-center" style={user.id!==rowId?{display:"none"}:{display:"block"}}>
                      <div className="w-[90%] bg-white border border-gray-200 rounded-lg shadow">
                        <div className="px-4 py-5">
                          <div className="mt-10">
                            <div className="px-16">
                              <div>
                                <p className="font-bold">Description</p>
                                <p>
                                  {user.company.catchPhrase}
                                </p>
                              </div>
                              <div className="flex w-full mt-6">
                                <div className="flex flex-col space-y-2 mr-[40%]">
                                  <div>
                                    <p className="font-bold">Contact person</p>
                                    <p>{user.company.name}</p>
                                  </div>
                                  <div>
                                    <p className="font-bold">Designation</p>
                                    <p>Proprietor</p>
                                  </div>
                                  <div>
                                    <p className="font-bold">Emails</p>
                                    <p>{user.email}</p>
                                  </div>
                                  <div>
                                    <p className="font-bold">Phones</p>{" "}
                                    <p>{user.phone}</p>
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-2">
                                  <div>
                                    <p className="font-bold">Address</p>
                                    <p>
                                      {user.address.suite}
                                    </p>
                                  </div>
                                  <div>
                                    <p className="font-bold">City</p>{" "}
                                    <p>{user.address.city}</p>
                                  </div>
                                  <div>
                                    <p className="font-bold">State</p>{" "}
                                    <p>{user.address.street}</p>
                                  </div>
                                  <div>
                                    <p className="font-bold">Country</p>{" "}
                                    <p>India</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              }
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
