"use client";
import React from "react";
import { useState, useEffect } from "react";

const Page = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [telegram, settelegram] = useState("");
  const [projectname, setprojectname] = useState("");
  const [projecturl, setprojecturl] = useState("");
  const [region, setregion] = useState("");
  const [checked, setChecked] = useState(null);
  const [twitter, settwitter] = useState("");
  const [wallet, setwallet] = useState("");
  const [chain, setchain] = useState('');

  const [showPopup, setShowPopup] = useState(false);

  // Handler functions for checkbox click events
  const handleYesChange = () => {
    setChecked("yes");
  };

  const handleNoChange = () => {
    setChecked("no");
  };

  // Handler function for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gather form data
    const formData = {
      name,
      email,
      telegram_id: telegram,
      project_name: projectname,
      project_id: projecturl,
      region,
      // chain,
      twitter_id: twitter,
      ran_node_before: checked === "yes",
      wallet_address: wallet
    };

    try {
      // Send POST request to API
      const response = await fetch(
        "https://dev.gateway.erebrus.io/api/v1.0/operator/new",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful response
      const result = await response.json();
      console.log("Form submitted successfully:", result);
      // You can add any success message or redirection here

      // Reset form fields
      setname('');
      setemail('');
      settelegram('');
      setprojectname('');
      setprojecturl('');
      setregion('');
      settwitter('');
      setChecked(null);
      setwallet('');
      setchain('');

      // Show success popup
      setShowPopup(true);

      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      // You can add error handling here
    }
  };

  return (
    <div>
      <section
        class="pt-40 pb-10"
        style={{
          backgroundImage: `url(/nodeformbg.png)`,
          backgroundSize: "cover",
        }}
      >
        <div
          style={{ backgroundColor: "#E9E2E2" }}
          className="w-1/2 mx-auto p-10 rounded-3xl text-black mb-20"
        >
          <div className="capitalize font-bold text-2xl">
            Fill the required details
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mt-10 text-xl">Name *</div>
            <input
              type="text"
              // placeholder="Game name"
              required
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              style={{ color: "black", backgroundColor: "#0B6A604D" }}
            />
            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <div className="mt-10 text-xl">Email *</div>
                <input
                  type="email"
                  // placeholder="Game name"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ color: "black", backgroundColor: "#0B6A604D" }}
                />
              </div>
              <div className="w-1/2">
                <div className="mt-10 text-xl">Telegram</div>
                <input
                  type="text"
                  // placeholder="Game name"
                  value={telegram}
                  onChange={(e) => settelegram(e.target.value)}
                  className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ color: "black", backgroundColor: "#0B6A604D" }}
                />
              </div>
            </div>

            <div className="mt-10 text-xl">Have you ran a node before</div>

            <div className="flex flex-col text-lg">
              <label>
                <input
                  type="checkbox"
                  style={{ width: "16px", height: "16px" }}
                  checked={checked === "yes"}
                  onChange={handleYesChange}
                />{" "}
                Yes
              </label>

              <label>
                <input
                  type="checkbox"
                  style={{ width: "16px", height: "16px" }}
                  checked={checked === "no"}
                  onChange={handleNoChange}
                />{" "}
                No
              </label>
            </div>

            <div className="mt-10 text-xl">Tell us your project name</div>
            <input
              type="text"
              // placeholder="Game name"
              value={projectname}
              onChange={(e) => setprojectname(e.target.value)}
              className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              style={{ color: "black", backgroundColor: "#0B6A604D" }}
            />

            <div className="mt-10 text-xl">Project URL</div>
            <input
              type="url"
              // placeholder="Game name"
              value={projecturl}
              onChange={(e) => setprojecturl(e.target.value)}
              className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
              style={{ color: "black", backgroundColor: "#0B6A604D" }}
            />

            <div className="flex justify-between gap-4">
              <div className="w-1/2">
                <div className="mt-10 text-xl">Node Region *</div>
                <input
                  type="text"
                  // placeholder="Game name"
                  required
                  value={region}
                  onChange={(e) => setregion(e.target.value)}
                  className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ color: "black", backgroundColor: "#0B6A604D" }}
                />
              </div>
              <div className="w-1/2">
                <div className="mt-10 text-xl">Twitter ID</div>
                <input
                  type="text"
                  // placeholder="Game name"
                  value={twitter}
                  onChange={(e) => settwitter(e.target.value)}
                  className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ color: "black", backgroundColor: "#0B6A604D" }}
                />
              </div>
            </div>

<div className="flex justify-between gap-4">
  <div className="w-1/2">
  <div className="mt-10 text-xl">Choose chain *</div>
            <select
              value={chain}
              onChange={(e) => setchain(e.target.value)}
              className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-black leading-tight focus:outline-none focus:shadow-outline"
              style={{ color: 'black', backgroundColor: '#0B6A604D' }}
            >
              <option value="" disabled>Select chain</option>
              <option value="aptos">Aptos</option>
              <option value="ethereum">Ethereum</option>
              <option value="sui">Sui</option>
              <option value="solana">Solana</option>
            </select>

                </div>
<div className="w-1/2">
<div className="mt-10 text-xl">Wallet Address *</div>
                <input
                  type="text"
                  // placeholder="Game name"
                  required
                  value={wallet}
                  onChange={(e) => setwallet(e.target.value)}
                  className="mt-2 shadow border appearance-none rounded-xl w-full py-4 px-6 text-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  style={{ color: "black", backgroundColor: "#0B6A604D" }}
                />
                </div>
                </div>

            <button
              style={{ backgroundColor: "#263238" }}
              className="mt-10 py-3 rounded-xl w-1/2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 text-black">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p>Your form has been submitted successfully.</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default Page;
