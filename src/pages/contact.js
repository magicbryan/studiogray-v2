import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const FormWrapper = styled.div`
  position: relative;
`


const ContactPage = () => {


  return (
    <Layout>
      <div className="inside-contain">
        <h1>Get in touch</h1>
        <div className="company-info">
          <p>107 SE Washington Street<br />
          #480<br />
          Portland, OR  97214</p>
          <p><a href="mailto:hello@studio-gray.co">hello@studio-gray.co</a></p>
        </div>

        <p>If you are interested in working with us, we would love to hear from you! We kindly ask that you fill out the following inquiry form in order to review your project. Once we receive your inquiry, we will contact you to schedule a complimentary discovery call. We look forward to hearing from you!</p>
        <FormWrapper>
            <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />


            <div className="form-section">
              <div className="form-col-2">
                <p>
                  <label>First Name<input type="text" name="first_name" required /></label>   
                </p>
              </div>
              <div className="form-col-2">
                <p>
                  <label>Last Name<input type="text" name="last_name" required /></label>   
                </p>
              </div>
              <div className="form-col-2">
                <p>
                  <label>Email<input type="email" name="email" required /></label>
                </p>
              </div>
              <div className="form-col-2">
                <p>
                  <label>Phone Number<input type="tel" name="phone_number" required /></label>
                </p>
              </div>
              <div className="form-col-2">
                <p>
                  <label>Project Address<textarea rows="4" name="project_address" /></label>
                </p>   
              </div>
            </div>
            <div className="form-section">
              <div className="form-col-2">
                <p><label>Ideal Project Start Date
                <input type="text" name="start_date" />
                <small>(please note whether this is to begin design or construction)</small>
                </label></p>
              </div>
              <div className="form-col-2">
                <p><label>Ideal Project Completion Date
                <input type="text" name="completion_date" />
                </label></p>
              </div>
            </div>
            <div className="form-section">
              <div className="form-col-2">
                <p>
                  <span className="label">Project Type: Please select all that apply*</span>
                  <div>
                    <input type="checkbox" name="project_type" value="New Build" id="new_build" />
                    <label for="new_build">New Build</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_type" value="Remodel" id="remodel" />
                    <label for="remodel">Remodel</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_type" value="Furnishing Styling" id="furnishing_styling" />
                    <label for="furnishing_styling">Furnishing &amp; Styling</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_type" value="Commercial" id="commercial" />
                    <label for="commercial">Commercial</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_type" value="Other" id="other" />
                    <label for="other">Other</label>
                  </div>
                </p>
                <p>
                  <label>If other, please describe:
                    <input type="text" name="other_description" />
                  </label>
                </p>
              </div>
              <div className="form-col-2">
                <p>
                  <span className="label">Has any construction begun on your project?</span>
                  <div>
                    <input type="checkbox" name="project_begun" value="Yes" id="yes" />
                    <label for="yes">Yes</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_begun" value="No" id="no" />
                    <label for="no">No</label>
                  </div>
                  <div>
                    <input type="checkbox" name="project_begun" value="Not Applicable" id="not_applicable" />
                    <label for="not_applicable">Not Applicable</label>
                  </div>
                </p>
              </div>
              <div className="form-col-1">
                <p>
                  <label>
                  Scope of Work:<br />
                  <small>Please describe the scope of the project and which spaces you are looking for design help with to complete your space.</small>
                    <textarea name="scope_of_work" rows="4" required></textarea>
                  </label>
                </p>
              </div>
              <div className="form-col-2">
                <p><label>Square Footage:
                  <input type="text" name="square_footage" />
                  <small>What is the approximate square footage of your project?
                  </small>
                  </label>
                </p>
              </div>
            </div>
            <div className="form-section">
              <div className="form-col-2">
                <p>
                  <label>Inspiration:
                  <input type="text" name="inspiration" />
                  <small>Please share a link to your project Pinterest or Houzz board if available.</small>
                  </label>
                </p>
              </div>
            </div>
   
         
           
            <div className="form-section">
            <div className="form-col-2">
              <p>
                <label>How did you hear about us?
                  <input name="how-did-you-hear-about-us" type="text" />
                </label>
              </p>
            </div>
          </div>
            
              <p>
                <button type="submit">Submit</button>
              </p>
          </form>
        </FormWrapper>
        <div>
          <p>For all other inquiries, please email us at <a href="mailto:hello@studio-gray.co">hello@studio-gray.co</a></p>
        </div>
      </div>
    </Layout>
  )
}


export default ContactPage
