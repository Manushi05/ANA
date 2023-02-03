function App() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div class="w-[90%] bg-white border border-gray-200 rounded-lg shadow">
          <div class="px-4 py-5">
            <div className="flex justify-between items-center">
              <div className="px-10 py-4">Hello Travels</div>
              <div className="px-10 py-4">
                <p className="font-bold">Contact</p> <p>Imran Dola</p>
              </div>
              <div className="px-10 py-4">
                <p className="font-bold">City</p> <p>Surat</p>
              </div>
              <div className="px-10 py-4">
                <p className="font-bold">State</p> <p>Gujarat</p>
              </div>
              <button className="bg-red-500 text-white rounded-full px-8 py-2">
                Button
              </button>
            </div>
            <div className="mt-10">
              <div className="px-16">
                <div>
                  <p className="font-bold">Description</p>
                  <p>
                    Providing service of domestic flight booking  @ lowest price guranteed and also offering international flight tickets 
                  giving services to our customers since 1995 now going to start hajj and and umrah very soon for our valuable customers it will
                  be also @ very affordable prices. 
                  </p>
                </div>
                <div className="flex w-full mt-6">
                  <div className="flex flex-col space-y-2 mr-[40%]">
                    <div>
                      <p className="font-bold">Contact person</p>
                      <p>Imran Dola</p>
                    </div>
                    <div>
                      <p className="font-bold">Designation</p>
                      <p>Proprietor</p>
                    </div>
                    <div>
                      <p className="font-bold">Emails</p>
                      <p>helloservices1@gmail.com</p>
                    </div>
                    <div>
                      <p className="font-bold">Phones</p> <p>9712500500</p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div>
                      <p className="font-bold">Address</p>
                      <p>
                        15 Kasmani Shopping Center Unn Surat Gujarat 395003
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">City</p> <p>Surat</p>
                    </div>
                    <div>
                      <p className="font-bold">State</p> <p>Gujarat</p>
                    </div>
                    <div>
                      <p className="font-bold">Country</p> <p>India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
