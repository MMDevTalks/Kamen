import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kdd-svg-definitions',
  template: `
  <svg display="none" version="1.1" >
    <defs>
      <symbol id="search" viewBox="0 0 30.239 30.239">
        <path d="M20.194,3.46c-4.613-4.613-12.121-4.613-16.734,0c-4.612,4.614-4.612,12.121,0,16.735
        c4.108,4.107,10.506,4.547,15.116,1.34c0.097,0.459,0.319,0.897,0.676,1.254l6.718,6.718c0.979,0.977,2.561,0.977,3.535,0
        c0.978-0.978,0.978-2.56,0-3.535l-6.718-6.72c-0.355-0.354-0.794-0.577-1.253-0.674C24.743,13.967,24.303,7.57,20.194,3.46z
        M18.073,18.074c-3.444,3.444-9.049,3.444-12.492,0c-3.442-3.444-3.442-9.048,0-12.492c3.443-3.443,9.048-3.443,12.492,0
        C21.517,9.026,21.517,14.63,18.073,18.074z"/>
      </symbol>
      <symbol id="add_to_list" viewBox="0 0 60 60">
      <g>
        <path d="M38.914,0H6.5v60h47V14.586L38.914,0z M39.5,3.414L50.086,14H39.5V3.414z M8.5,58V2h29v14h14v42H8.5z"/>
	<path d="M42.5,21h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,21,42.5,21z"/>
	<path d="M22.875,18.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,23.901,18.243,24,18.5,24c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,17.943,23.306,17.874,22.875,18.219z"/>
	<path d="M42.5,32h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,32,42.5,32z"/>
	<path d="M22.875,29.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,34.901,18.243,35,18.5,35c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,28.943,23.306,28.874,22.875,29.219z"/>
	<path d="M42.5,43h-16c-0.552,0-1,0.447-1,1s0.448,1,1,1h16c0.552,0,1-0.447,1-1S43.052,43,42.5,43z"/>
	<path d="M22.875,40.219l-4.301,3.441l-1.367-1.367c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414l2,2
		C17.987,45.901,18.243,46,18.5,46c0.22,0,0.441-0.072,0.624-0.219l5-4c0.432-0.346,0.501-0.975,0.156-1.406
		C23.936,39.943,23.306,39.874,22.875,40.219z"/>
      </g>
      </symbol>
      <symbol id="close" viewBox="0 0 357 357">
        <polygon points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
        214.2,178.5 		"/>
      </symbol>
      <symbol id="info" viewBox="0 0 512 512">
        <path d="M254.26,0C113.845,0,0,113.845,0,254.26s113.845,254.26,254.26,254.26
          s254.26-113.845,254.26-254.26S394.675,0,254.26,0z M286.042,381.39c0,17.544-14.239,31.782-31.782,31.782
          s-31.782-14.239-31.782-31.782V222.477c0-17.544,14.239-31.782,31.782-31.782s31.782,14.239,31.782,31.782V381.39z
          M254.26,159.421c-17.544,0-31.782-14.239-31.782-31.782s14.239-31.782,31.782-31.782s31.782,14.239,31.782,31.782
          S271.804,159.421,254.26,159.421z"/>
      </symbol>
      <symbol id="vote" viewBox="0 0 512 512">
        <path d="M512,304.021c0-12.821-5.099-24.768-13.867-33.6c9.963-10.901,15.019-25.536,13.632-40.725
        c-2.475-27.115-26.923-48.363-55.616-48.363H324.395c6.485-19.819,16.939-56.149,16.939-85.333c0-46.272-39.317-85.333-64-85.333
        c-22.165,0-38.016,12.459-38.677,12.992c-2.539,2.048-3.989,5.099-3.989,8.341v72.32l-61.44,133.141l-2.56,1.28v-4.075
        c0-5.888-4.779-10.667-10.667-10.667H53.333C23.936,224,0,247.936,0,277.333V448c0,29.397,23.936,53.333,53.333,53.333h64
        c23.083,0,42.773-14.72,50.219-35.243c17.749,9.131,41.643,13.931,56.469,13.931H419.84c23.232,0,43.541-15.68,48.32-37.269
        c2.453-11.115,1.024-22.315-3.84-32.043c15.744-7.936,26.347-24.171,26.347-42.688c0-7.552-1.728-14.784-5.013-21.333
        C501.397,338.752,512,322.517,512,304.021z M149.333,448c0,17.643-14.379,32-32,32h-64c-17.664,0-32-14.357-32-32V277.333
        c0-17.643,14.357-32,32-32v0.107h95.957v10.667c0,0.064,0.043,0.107,0.043,0.171V448z M466.987,330.368
        c-4.117,0.469-7.595,3.264-8.896,7.211c-1.301,3.925-0.235,8.277,2.795,11.115c5.44,5.141,8.427,12.011,8.427,19.349
        c0,13.44-10.155,24.768-23.637,26.304c-4.117,0.469-7.595,3.264-8.896,7.211c-1.301,3.925-0.235,8.277,2.795,11.115
        c7.04,6.635,9.856,15.936,7.744,25.472c-2.624,11.883-14.187,20.523-27.499,20.523H224c-15.851,0-41.365-6.848-53.333-15.744
        V262.656l15.381-7.68c2.155-1.088,3.883-2.88,4.907-5.077l64-138.667c0.64-1.387,0.981-2.923,0.981-4.459V37.909
        c4.437-2.453,12.139-5.803,21.333-5.803c11.691,0,42.667,29.077,42.667,64c0,37.525-20.416,91.669-20.629,92.203
        c-1.237,3.264-0.811,6.955,1.195,9.835c2.005,2.88,5.269,4.608,8.789,4.608h146.795c17.792,0,32.896,12.715,34.389,28.971
        c1.131,12.16-4.672,23.723-15.168,30.187c-3.285,2.005-5.205,5.653-5.056,9.493c0.128,3.84,2.347,7.296,5.781,9.067
        c9.003,4.608,14.592,13.653,14.592,23.595C490.603,317.504,480.448,328.832,466.987,330.368z"/>
      </symbol>
      <symbol id="popularity" viewBox="0 0 60 60">
        <path d="M59,55.5v-39H47v39h-3v-31H32v31h-3v-23H17v23h-3v-14H2v14H1c-0.552,0-1,0.447-1,1s0.448,1,1,1h1h12h3h12h3h12h3h12
        c0.552,0,1-0.447,1-1S59.552,55.5,59,55.5z M4,55.5v-12h8v12H4z M19,55.5v-21h8v21H19z M34,55.5v-29h8v29H34z M49,55.5v-37h8v37H49
        z"/>
      <path d="M8.03,27.83c0.169,0,0.342-0.043,0.499-0.134l36.269-20.94l-2.27,4.99c-0.229,0.503-0.007,1.096,0.496,1.324
        c0.134,0.062,0.275,0.09,0.414,0.09c0.38,0,0.743-0.218,0.911-0.586l3.562-7.83c0.011-0.025,0.009-0.052,0.018-0.078
        c0.019-0.053,0.034-0.104,0.044-0.16c0.005-0.028,0.021-0.051,0.023-0.08c0.001-0.012-0.004-0.022-0.003-0.034
        c0.002-0.038-0.002-0.073-0.004-0.111c-0.003-0.055-0.012-0.107-0.024-0.162c-0.008-0.038-0.01-0.077-0.023-0.114
        c-0.012-0.036-0.033-0.066-0.049-0.101C47.88,3.881,47.88,3.854,47.866,3.83c-0.014-0.024-0.038-0.038-0.054-0.061
        c-0.021-0.031-0.037-0.064-0.062-0.092c-0.026-0.03-0.059-0.051-0.089-0.078c-0.041-0.037-0.082-0.071-0.128-0.101
        c-0.031-0.02-0.059-0.042-0.093-0.059c-0.011-0.005-0.017-0.015-0.028-0.02c-0.025-0.011-0.052-0.009-0.077-0.018
        c-0.055-0.02-0.109-0.034-0.166-0.044c-0.026-0.005-0.047-0.02-0.074-0.022l-8.562-0.83c-0.555-0.056-1.039,0.35-1.092,0.898
        c-0.054,0.55,0.349,1.039,0.898,1.092l5.456,0.529L7.529,25.964C7.05,26.24,6.887,26.852,7.163,27.33
        C7.348,27.651,7.684,27.83,8.03,27.83z"/>
      </symbol>
      <symbol id="movie_reel" viewBox="0 0 58 58">
      <path d="M36.537,28.156l-11-7c-0.308-0.195-0.698-0.208-1.019-0.033C24.199,21.299,24,21.635,24,22v14
      c0,0.365,0.199,0.701,0.519,0.877C24.669,36.959,24.834,37,25,37c0.187,0,0.374-0.053,0.537-0.156l11-7
      C36.825,29.66,37,29.342,37,29S36.825,28.34,36.537,28.156z M26,34.179V23.821L34.137,29L26,34.179z"/>
      <path d="M57,6H47H11H1C0.448,6,0,6.447,0,7v11v11v11v11c0,0.553,0.448,1,1,1h10h36h10c0.552,0,1-0.447,1-1V40V29V18V7
        C58,6.447,57.552,6,57,6z M10,28H2v-9h8V28z M2,30h8v9H2V30z M12,40V29V18V8h34v10v11v11v10H12V40z M56,28h-8v-9h8V28z M48,30h8v9
        h-8V30z M56,8v9h-8V8H56z M2,8h8v9H2V8z M2,50v-9h8v9H2z M56,50h-8v-9h8V50z"/>
      </symbol>
      <symbol id="clapper" viewBox="0 0 512 512">
        <path d="M100.833,265.607L433.655,73.856L391.107,0L27.058,209.743l37.739,65.503v60.389v15.209V512h420.144V350.842v-15.209
        v-70.026H100.833z M458.979,280.816l-54.818,54.817h-90.129l54.818-54.817H458.979z M235.706,280.816l-54.818,54.817H90.76
        l54.818-54.817H235.706z M124.07,280.816L80.006,324.88v-44.064H124.07z M412.886,68.27l-38.179,21.996l16.183-60.177
        L412.886,68.27z M376.202,26.14l-20.132,74.865L277.973,146l20.132-74.866L376.202,26.14z M279.468,81.872l-20.132,74.864
        l-78.093,44.992l20.132-74.863L279.468,81.872z M182.739,137.601l-20.132,74.865l-78.094,44.992l20.132-74.863L182.739,137.601z
        M47.828,215.329l38.18-21.998l-16.183,60.178L47.828,215.329z M80.006,496.791v-115.53h105.078v-15.209H80.006v-15.21h145.637
        v-15.209h-23.247l54.818-54.817h90.128l-54.818,54.817h-46.602v15.209h223.811v145.948H80.006z M469.733,335.633h-44.064
        l44.064-44.064V335.633z"/>
        </symbol>
        <symbol id="check_mark" viewBox="0 0 611.983 611.983">
        <g>
          <path d="M217.625,515.458h-0.06c-6.517,0-12.775-2.65-17.379-7.255L7.147,313.77c-9.586-9.646-9.506-25.211,0.1-34.757
            c9.706-9.626,25.211-9.526,34.757,0.1l175.66,176.956L570.021,103.73c9.626-9.606,25.171-9.606,34.757,0
            c9.606,9.586,9.606,25.151,0,34.757L235.003,508.264C230.399,512.867,224.142,515.458,217.625,515.458z"/>
        </g>
          </symbol>
          <symbol id="back_button" viewBox=" 0 0 477.175 477.175">
          <g>
          <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
            c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
          </g>
            </symbol>
    </defs>
</svg>
`
})
export class SvgDefinitionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
